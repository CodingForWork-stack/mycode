import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AxiosFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    }

    fetchData();
  }, []);

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      borderRadius: '10px',
      maxWidth: '800px',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: '#0070f3'
      }}>Data Fetching with Axios</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This page demonstrates how to use Axios for client-side data fetching. Axios is a popular HTTP client that simplifies making API requests.
      </p>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      }}>
        {posts.map(post => (
          <li key={post.id} style={{
            marginBottom: '10px',
            fontSize: '1.1rem',
            color: '#333',
          }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


