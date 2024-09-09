import Link from 'next/link';

export default function About() {
    return (
        <div style={{
            backgroundColor: '#f0f4f8',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            height: '100vh',
            color: '#333',
            borderRadius: '8px'
        }}>
            <h1 style={{
                fontSize: '2rem',
                borderBottom: '2px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '20px'
            }}>About Page</h1>
            <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6'
            }}>
                Welcome to the about page of our Next.js project. Here, you can learn more about what we do and our mission.
            </p>
            <nav style={{
                marginTop: '20px'
            }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    color: '#0070f3',
                    textDecoration: 'none'
                }}>
                    Return to Home
                </Link>
            </nav>
        </div>
    );
}

