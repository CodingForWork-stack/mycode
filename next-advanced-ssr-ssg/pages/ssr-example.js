export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();

  return { props: { repo } };
}

export default function SSRExample({ repo }) {
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
      }}>Next.js Repository Details (SSR)</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        This page demonstrates Server-Side Rendering (SSR). The data for the Next.js repository is fetched from the GitHub API at request time and rendered on the server.
      </p>
      <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        <p><strong>Name:</strong> {repo.name}</p>
        <p><strong>Description:</strong> {repo.description}</p>
        <p><strong>Stars:</strong> {repo.stargazers_count}</p>
        <p><strong>Forks:</strong> {repo.forks_count}</p>
      </div>
    </div>
  );
}


