// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Set up the Apollo Client instance
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/', // API endpoint
    cache: new InMemoryCache() // In-memory cache for efficient state management
});

export default client;

