export default function Custom404() {
  return (
    <div style={containerStyle}>
      <img src="https://t3.ftcdn.net/jpg/05/59/55/28/360_F_559552850_Qca6ZAulEZk0Lm7TrceTdBI3D2YwRM1b.jpg" alt="Confused Cat" style={imageStyle} />
      <p style={descriptionStyle}>It seems the page you are looking for doesn't exist. Maybe the cat hid it somewhere?</p>
      <a href="/" style={homeLinkStyle}>Go back to Home</a>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'white',
  color: '#333',
  textAlign: 'center',
};

const imageStyle = {
  width: '500px',
  borderRadius: '8px',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  color: '#666',
};

const homeLinkStyle = {
  fontSize: '1.2rem',
  color: '#0070f3',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  border: '2px solid #0070f3',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

homeLinkStyle[':hover'] = {
  backgroundColor: '#0070f3',
  color: '#fff',
};


