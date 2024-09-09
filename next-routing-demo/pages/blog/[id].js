// pages/blog/[id].js

// Import useRouter from Next.js to access dynamic route parameters
import { useRouter }

from 'next/router';
  import Link from 'next/link';

export default function BlogPost() {
  // Access the router object and extract the dynamic route parameter
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={styles.container}>
      {/* Main title showing the dynamic blog post ID */}
      <h1 style={styles.title}>Blog Post {id}</h1>

      {/* Navigation links */}
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li style={styles.listItem}><Link href="/">Home</Link></li>
          <li style={styles.listItem}><Link href="/about">About</Link></li>
          <li style={styles.listItem}><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Description of the dynamic blog post */}
      <p style={styles.paragraph}>This is a detailed view of blog post {id}. Here, you would drop the blog content itself.</p>
    </div>
  );
}

// Inline styles for the BlogPost component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
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

