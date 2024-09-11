// pages/_app.js
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';

const noAuthRequired = ['/', '/api/auth/signin', '/api/auth/callback'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isProtectedRoute = !noAuthRequired.includes(router.pathname);

  return (
    <SessionProvider session={pageProps.session}>
      {isProtectedRoute ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;

