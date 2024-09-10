// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Next.js Redux Lab</h1>
      <p style={styles.description}>
        Welcome to the Advanced State Management with Redux in Next.js lab. Use the links below to navigate through different sections of the lab.
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link href="/test-redux" style={styles.link}>Test Redux</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/ssr" style={styles.link}>SSR with Redux</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/ssg" style={styles.link}>SSG with Redux</Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    margin: '10px 0',
  },
  link: {
    fontSize: '1.5rem',
    color: '#0070f3',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
  }
};

