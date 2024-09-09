// src/App.js

// Import necessary components from React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Home component with navigation links
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blog/123">Blog Post 123</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// About component with navigation links
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// BlogPost component showing the dynamic blog post ID
function BlogPost() {
  let { id } = useParams();
  return (
    <div>
      <h1>Blog Post {id}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Blog component with navigation links
function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog/123">Blog Post 123</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Main App component with all routes defined
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

