import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn(user, account, profile) {
      console.log('SignIn callback:', user, account, profile);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect callback:', url, baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      console.log('Session callback:', session, token, user);
      session.userId = user?.id;
      return session;
    },
    async jwt({ token, user }) {
      console.log('JWT callback:', token, user);
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});

