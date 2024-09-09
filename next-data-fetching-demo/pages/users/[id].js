export async function getStaticPaths() {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await res.json();

const paths = users.map(user => ({
  params: { id: user.id.toString() },
}));

return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
const user = await res.json();

return { props: { user } };
}

export default function User({ user }) {
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
    }}>{user.name}</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
      This page demonstrates how to generate dynamic routes using <strong>getStaticPaths</strong> and <strong>getStaticProps</strong>. The data for this user profile is fetched at build time.
    </p>
    <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
      <strong>Email:</strong> {user.email}
    </p>
    <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
      <strong>Website:</strong> {user.website}
    </p>
  </div>
);
}


