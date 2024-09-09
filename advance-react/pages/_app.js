// pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Import global styles for the app

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render the current page
}

export default MyApp; // Export the custom App component

