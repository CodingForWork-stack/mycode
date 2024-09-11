import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={containerStyle}>
          <h1 style={titleStyle}>Something went wrong.</h1>
          <p style={descriptionStyle}>We’re sorry, but an unexpected error has occurred.</p>
          <a href="/" style={homeLinkStyle}>Go back to Home</a>
        </div>
      );
    }

    return this.props.children;
  }
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  color: '#444',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '4rem',
  marginBottom: '1rem',
  color: '#e74c3c',
};

const descriptionStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  color: '#777',
};

const homeLinkStyle = {
  fontSize: '1rem',
  color: '#3498db',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  border: '2px solid #3498db',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

homeLinkStyle[':hover'] = {
  backgroundColor: '#3498db',
  color: '#fff',
};

export default ErrorBoundary;

