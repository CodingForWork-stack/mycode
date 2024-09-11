// pages/dashboard.js
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== 'loading') {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <div style={styles.loading}>Loading your dashboard...</div>;
  }

  if (!session) {
    return <div style={styles.error}>You need to be signed in to view this page.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.dashboardBox}>
        <h1 style={styles.title}>Welcome, {session.user.name}!</h1>
        <p style={styles.subtitle}>We're glad to have you here.</p>
        <div style={styles.userInfo}>
          <img src={session.user.image} alt="User Image" style={styles.userImage} />
          <p style={styles.userDetails}>Email: {session.user.email}</p>
        </div>
        <p style={styles.message}>
          This is your personalized dashboard. Feel free to explore your account and manage your settings.
        </p>
        <button onClick={() => signOut({ callbackUrl: '/' })} style={styles.logoutButton}>
          Log Out
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  dashboardBox: {
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '20px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  userImage: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  userDetails: {
    fontSize: '1rem',
    color: '#666',
  },
  message: {
    fontSize: '1.25rem',
    color: '#777',
  },
  loading: {
    fontSize: '1.5rem',
    color: '#777',
    textAlign: 'center',
    marginTop: '20px',
  },
  error: {
    fontSize: '1.5rem',
    color: '#ff0000',
    textAlign: 'center',
    marginTop: '20px',
  },
  logoutButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    color: '#fff',
    backgroundColor: '#ff0000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};


