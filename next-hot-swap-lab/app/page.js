"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from 'react';

// Simulated data for Server Metrics and User Stats
const fakeServerMetrics = { cpu: "45%", memory: "70%", uptime: "48 days" };
const fakeUserStats = { users: 1056, active: 98, pending: 34 };

export default function Dashboard() {
  const [activeWidget, setActiveWidget] = useState('CryptoPrices');

  const handleSwap = (widget) => {
    setActiveWidget(widget);
  };

  return (
    <div style={styles.container}>
      <h1>Real-Time Dashboard</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleSwap('CryptoPrices')}>Crypto Prices</button>
        <button onClick={() => handleSwap('ServerMetrics')}>Server Metrics</button>
        <button onClick={() => handleSwap('UserStats')}>User Stats</button>
      </div>
      <div style={styles.widget}>
        {activeWidget === 'CryptoPrices' && <CryptoPricesWidget />}
        {activeWidget === 'ServerMetrics' && <ServerMetricsWidget data={fakeServerMetrics} />}
        {activeWidget === 'UserStats' && <UserStatsWidget data={fakeUserStats} />}
      </div>
    </div>
  );
}

function CryptoPricesWidget() {
  const [prices, setPrices] = useState({ bitcoin: 0, ethereum: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        const bitcoin = data.data.find(coin => coin.id === 'bitcoin').priceUsd;
        const ethereum = data.data.find(coin => coin.id === 'ethereum').priceUsd;
        setPrices({ bitcoin, ethereum });
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
      setLoading(false);
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h2>Cryptocurrency Prices (Real-Time)</h2>
      {loading ? (
        <p>Loading prices...</p>
      ) : (
        <>
          <p>Bitcoin: ${parseFloat(prices.bitcoin).toFixed(2)}</p>
          <p>Ethereum: ${parseFloat(prices.ethereum).toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

function ServerMetricsWidget({ data }) {
  return (
    <div>
      <h2>Server Metrics</h2>
      <p>CPU Usage: {data.cpu}</p>
      <p>Memory Usage: {data.memory}</p>
      <p>Uptime: {data.uptime}</p>
    </div>
  );
}

function UserStatsWidget({ data }) {
  return (
    <div>
      <h2>User Statistics</h2>


      <p>Total Users: {data.users}</p>
      <p>Active Users: {data.active}</p>
      <p>Pending Users: {data.pending}</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  widget: {
    padding: '20px',
    margin: '20px',
    border: '2px solid #0070f3',
    borderRadius: '5px',
    textAlign: 'left',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

