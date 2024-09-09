import Link from 'next/link';

export default function Home() {
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
        marginBottom: '30px', 
        textAlign: 'center',
        color: '#0070f3'
      }}>Advanced SSR and SSG Techniques in Next.js</h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '30px', 
        textAlign: 'center'
      }}>
        Explore advanced server-side rendering and static site generation techniques. Click on a topic below to learn more.
      </p>

      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      }}>
        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/ssr-example" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Server-Side Rendering (SSR)
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Learn how to fetch and render data at request time on the server.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/ssg-example" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Static Site Generation (SSG)
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Discover how to pre-render pages at build time for better performance.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/isr-example" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Incremental Static Regeneration (ISR)
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Implement ISR to keep static content up-to-date without rebuilding the entire site.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/advanced-ssr" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Advanced SSR Techniques
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Combine SSR with client-side fetching for dynamic and interactive pages.
          </p>
        </li>
      </ul>
    </div>
  );
}


