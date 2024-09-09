import Link from 'next/link';

export default function Home() {
    return (
        <div style={{
            backgroundColor: '#e3f2fd',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            height: '100vh',
            color: '#333',
            borderRadius: '8px'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                borderBottom: '2px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '20px'
            }}>Alta3 Research NextJS Simple Example Home Page</h1>
            <nav>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                }}>
                    <li style={{ 
                        marginBottom: '10px'
                    }}>
                        <Link href="/about" style={{
                            fontSize: '1.5rem',
                            color: '#0070f3',
                            textDecoration: 'none'
                        }}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

