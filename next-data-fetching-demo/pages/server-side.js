export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default function ServerSide({ posts }) {
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
      }}>Server-Side Data Fetching</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This page demonstrates how to fetch data at request time using <strong>getServerSideProps</strong>. The data below is fetched from an external API on each request.
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


