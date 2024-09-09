import React, { useState, useCallback, useMemo, useEffect } from 'react';

export default function Performance() {
  const [count, setCount] = useState(0); // State for count
  const [text, setText] = useState(''); // State for input text

  // useCallback to memoize the increment function, improving performance by preventing unnecessary re-renders
  const increment = useCallback(() => setCount(count + 1), [count]);

  // useMemo to memoize the doubled count, avoiding recalculations unless count changes
  const doubledCount = useMemo(() => count * 2, [count]);

  // useEffect with a cleanup function to handle side-effects (like setting up and clearing intervals)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Increment count every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px', 
        textAlign: 'center',
        color: '#0070f3'
      }}>Performance Optimized Page</h1>
      
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem' }}>Count: <strong>{count}</strong></p>
        <p style={{ fontSize: '1.2rem' }}>Doubled Count (memoized): <strong>{doubledCount}</strong></p>
        <button onClick={increment} style={{
          fontSize: '1rem',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        }}>
          Increment
        </button>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px', 
        backgroundColor: '#fff', 
        padding: '20px', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '10px' }}>Stateful Input</h2>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
          Type something in the box below, observe how it's instantly saved to state and displayed:
        </p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{
            fontSize: '1rem',
            padding: '10px',
            width: '80%',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
        />
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#555', 
          marginTop: '10px',
          fontStyle: 'italic'
        }}>{text}</p>
      </div>
    </div>
  );
}


