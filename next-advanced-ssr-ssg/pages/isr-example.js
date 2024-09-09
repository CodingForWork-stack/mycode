export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts }, revalidate: 10 };
}

export default function ISRExample({ posts }) {
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
      }}>Blog Posts (ISR)</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This page demonstrates Incremental Static Regeneration (ISR). The blog posts below are fetched at build time and updated every 10 seconds to ensure the content is always fresh.
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


