// pages/axios.js
import { useEffect, useState } from 'react';
import axiosClient from '../lib/axiosClient';

export default function AxiosPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosClient.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Posts Fetched with Axios</h1>
            <ul style={styles.list}>
                {posts.map((post) => (
                    <li key={post.id} style={styles.listItem}>
                        <h2 style={styles.postTitle}>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Styles for the Axios page
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
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    postTitle: {
        fontSize: '1.5rem',
        color: '#0070f3',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
};

