// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    // Wrap the entire application in the ApolloProvider
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;

