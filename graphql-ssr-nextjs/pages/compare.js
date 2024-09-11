// pages/compare.js
import axios from 'axios';
import { gql } from '@apollo/client';
import initializeApollo from '../lib/apolloClient';

const GET_QUOTE = gql`
    query GetQuote {
        quoteOfTheDay
    }
`;

export default function Compare({ restQuote, graphQLQuote }) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>REST vs GraphQL</h1>
            <div style={styles.quoteContainer}>
                <div style={styles.quoteBox}>
                    <h2 style={styles.methodTitle}>REST Quote</h2>
                    <p style={styles.quote}>{restQuote}</p>
                </div>
                <div style={styles.quoteBox}>
                    <h2 style={styles.methodTitle}>GraphQL Quote</h2>
                    <p style={styles.quote}>{graphQLQuote}</p>
                </div>
            </div>
            <p style={styles.disclaimer}>
                Both quotes are fetched from the server, but one is fetched using a RESTful API and the other using a GraphQL query.
            </p>
        </div>
    );
}

export async function getServerSideProps() {
    const apolloClient = initializeApollo();

    const restResponse = await axios.get('http://localhost:8080/api/quote');
    const { data } = await apolloClient.query({
        query: GET_QUOTE,
    });

    return {
        props: {
            restQuote: restResponse.data.quote,
            graphQLQuote: data.quoteOfTheDay,
        }
    }
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
        transition: 'background-color 0.3s ease',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px',
    },
    quoteContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    quoteBox: {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        flex: '0 1 45%',
    },
    methodTitle: {
        fontSize: '1.5rem',
        color: '#0070f3',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    quote: {
        fontSize: '1.25rem',
        color: '#333',
    },
    disclaimer: {
        fontSize: '1rem',
        color: '#777',
        marginTop: '20px',
    },
};

