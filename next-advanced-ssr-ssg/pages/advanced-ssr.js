import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  // Fetch a specific post (e.g., post with id 1)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return { props: { post } };
}

export default function AdvancedSSR({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
      const data = await res.json();
      setComments(data);
    }

    fetchComments();
  }, [post.id]);

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
      }}>Advanced SSR Example</h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This page demonstrates an advanced usage of Server-Side Rendering (SSR) in Next.js. We are fetching the data for a specific blog post and rendering it on the server before sending the HTML to the client. Additionally, once the page loads, we fetch and display the comments associated with the post on the client side. This combination of SSR and client-side data fetching is useful for creating dynamic and interactive pages while ensuring fast initial load times and good SEO performance.
      </p>

      <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#0070f3' }}>
          {post.title}
        </h2>
        <p style={{ marginBottom: '20px' }}>
          {post.body}
        </p>
      </div>

      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: '#0070f3'
      }}>Comments</h2>

      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      }}>
        {comments.map(comment => (
          <li key={comment.id} style={{
            marginBottom: '10px',
            fontSize: '1.1rem',
            color: '#333',
          }}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


