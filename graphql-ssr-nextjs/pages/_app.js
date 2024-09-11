// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const client = initializeApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;

