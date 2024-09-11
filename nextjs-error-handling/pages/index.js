export default function Home() {
  return (
    <div style={containerStyle}>
      <img src="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg" alt="Two different breeds of cats" style={imageStyle} />
      <h1 style={titleStyle}>Welcome to Cat Facts</h1>
      <p style={descriptionStyle}>
        Did you know? Cats are one of the most popular pets in the world. They are known for their independence, playful behavior, and ability to keep themselves clean.
      </p>
      <div style={factContainerStyle}>
        <h2 style={factTitleStyle}>Random Cat Facts:</h2>
        <ul style={factListStyle}>
          <li>Cats have five toes on their front paws, but only four on the back ones.</li>
          <li>A group of cats is called a clowder.</li>
          <li>Cats can rotate their ears 180 degrees.</li>
          <li>The oldest known pet cat existed 9,500 years ago.</li>
          <li>Cats sleep for around 13-16 hours a day, which is roughly 70% of their life.</li>
        </ul>
      </div>
      <a href="https://en.wikipedia.org/wiki/Cat" style={learnMoreStyle} target="_blank" rel="noopener noreferrer">Learn more about cats</a>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
  color: '#333',
  textAlign: 'center',
};

const imageStyle = {
  width: '30%',
  borderRadius: '8px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
  color: '#ff6347',
};

const descriptionStyle = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  color: '#555',
};

const factContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '2rem',
  maxWidth: '600px',
};

const factTitleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#333',
};

const factListStyle = {
  textAlign: 'left',
  color: '#444',
  lineHeight: '1.6',
};

const learnMoreStyle = {
  fontSize: '1.2rem',
  color: '#0070f3',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  border: '2px solid #0070f3',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

learnMoreStyle[':hover'] = {
  backgroundColor: '#0070f3',
  color: '#fff',
};

