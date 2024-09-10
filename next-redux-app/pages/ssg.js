import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsForSSG } from '../src/redux/slices';
import Link from 'next/link';

const SSGPage = ({ initialPosts }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.ssgPosts);

  useEffect(() => {
    if (!posts) {
      dispatch(fetchPostsForSSG());
    }
  }, [dispatch, posts]);

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link href="/ssr" style={styles.link}>Go to SSR Page</Link>
      </nav>
      <h1 style={styles.title}>Static Site Generation with Redux and Thunk</h1>
      <ul style={styles.list}>
        {(posts || initialPosts).map((post) => (
          <li key={post.id} style={styles.listItem}>
            <strong>{post.title}</strong>
            <span style={styles.date}> - {new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetch initial static props at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await response.json();

  posts = posts.map(post => ({
    ...post,
    date: new Date(post.id * 1000000000).toISOString(),
  }));

  return {
    props: {
      initialPosts: posts,
    },
    revalidate: 10,
  };
}

export default SSGPage;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    marginBottom: '20px',
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#0070f3', // Background color for the nav bar
    borderRadius: '8px',
  },
  link: {
    color: '#fff', // White color for the link text
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  date: {
    display: 'block',
    color: '#666',
    marginTop: '5px',
  },
};

