// pages/about.js

// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';

export default function About() {
  return (
    <div style={styles.container}>
      {/* Main title of the About page */}
      <h1 style={styles.title}>About Us</h1>

      {/* Navigation links */}
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li style={styles.listItem}><Link href="/">Home</Link></li>
          <li style={styles.listItem}><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Brief description of the About page */}
      <p style={styles.paragraph}>Learn more about our company, mission, and team on this page. We are committed to delivering the best experience to our users.</p>
    </div>
  );
}

// Inline styles for the About component
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

