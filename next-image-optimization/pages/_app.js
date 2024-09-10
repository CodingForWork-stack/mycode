// pages/_app.js
import '../styles/globals.css'; // Importing global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />; // Rendering the main component with its props
}

