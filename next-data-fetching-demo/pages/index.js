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
      }}>Next.js Data Fetching Strategies</h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '30px', 
        textAlign: 'center'
      }}>
        Explore various data fetching methods in Next.js. Click on a topic below to learn more.
      </p>

      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      }}>
        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/server-side" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Server-Side Data Fetching (getServerSideProps)
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Learn how to fetch data at request time using server-side rendering.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/static-props" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Static Site Generation (getStaticProps)
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Discover how to fetch data at build time for static pages.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/users/[id]" as={`/users/1`} style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Dynamic Routes with getStaticPaths
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Generate dynamic routes and fetch data for each page at build time.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/client-side" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Client-Side Data Fetching
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Implement client-side data fetching for real-time updates.
          </p>
        </li>

        <li style={{ 
          marginBottom: '20px' 
        }}>
          <Link href="/axios-fetch" style={{
            fontSize: '1.5rem',
            color: '#0070f3',
            textDecoration: 'none',
          }}>
            Data Fetching with Axios
          </Link>
          <p style={{
            fontSize: '1rem',
            color: '#666',
          }}>
            Use Axios to manage API calls in a Next.js project.
          </p>
        </li>
      </ul>
    </div>
  );
}

