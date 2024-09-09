// pages/index.js

// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Main title of the home page */}
      <h1 style={styles.title}>Welcome to Our Website</h1>

      {/* Navigation links */}
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li style={styles.listItem}><Link href="/about">About Us</Link></li>
          <li style={styles.listItem}><Link href="/blog">Blog</Link></li>
          <li style={styles.listItem}><Link href="/blog/123">Blog Post 123</Link></li>
          <li style={styles.listItem}><Link href="/blog/456">Blog Post 456</Link></li>
        </ul>
      </nav>

      {/* Brief description of the home page */}
      <p style={styles.paragraph}>This is the home page where you can find general information about our site. Explore our blog or learn more about us.</p>
    </div>
  );
}

// Inline styles for the Home component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#333',
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
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

