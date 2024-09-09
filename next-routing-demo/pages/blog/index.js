// pages/blog/index.js

// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';

export default function BlogLanding() {
  return (
    <div style={styles.container}>
      {/* Main title of the Blog page */}
      <h1 style={styles.title}>Blog</h1>

      {/* Brief description of the Blog page */}
      <p style={styles.description}>Welcome to our blog! Here you'll find a variety of posts on different topics.</p>

      {/* Navigation links */}
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li style={styles.listItem}><Link href="/">Home</Link></li>
          <li style={styles.listItem}><Link href="/about">About</Link></li>
          <li style={styles.listItem}><Link href="/blog/123">Blog Post 123</Link></li>
          <li style={styles.listItem}><Link href="/blog/456">Blog Post 456</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Inline styles for the BlogLanding component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    height: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#666',
  },
  nav: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
};

