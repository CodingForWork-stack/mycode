import React from 'react';
import Greeting from '../components/Greeting';
import UserProfile from '../components/UserProfile';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Next.js Testing Lab</h1>
      <p style={styles.description}>
        This page includes components that will be tested using Jest and React Testing Library.
      </p>

      {/* Render the Greeting component */}
      <div style={styles.section}>
        <Greeting name="John Doe" />
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 2rem',
  },
  title: {
    margin: '0',
    fontSize: '3rem',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    margin: '1rem 0',
    fontSize: '1.5rem',
  },
  section: {
    marginTop: '2rem',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

