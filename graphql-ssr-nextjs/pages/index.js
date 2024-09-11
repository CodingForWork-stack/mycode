// pages/index.js
import { gql } from '@apollo/client';
import initializeApollo from '../lib/apolloClient';

const GET_QUOTE = gql`
    query GetQuote {
        quoteOfTheDay
    }
`;

export default function Home({ quote }) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Server-Side Rendered Quote of the Day</h1>
            <p style={styles.quote}>"{quote}"</p>
            <p style={styles.info}>
                This quote was fetched and rendered on the server for each request, ensuring up-to-date data.
            </p>
        </div>
    );
}

export async function getServerSideProps() {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: GET_QUOTE,
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(), // Cache the query result
            quote: data.quoteOfTheDay,
        }
    };
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px',
    },
    quote: {
        fontSize: '1.5rem',
        color: '#0070f3',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    info: {
        fontSize: '1rem',
        color: '#666',
    },
};

