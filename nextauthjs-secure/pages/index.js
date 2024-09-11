// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push('/dashboard'); // Redirect to dashboard
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to your Totally Real Home Page</h1>
      <p style={styles.subtitle}>Click the button to go to your dashboard</p>
      <button onClick={handleGoToDashboard} style={styles.button}>
        Go to Dashboard
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#555',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

