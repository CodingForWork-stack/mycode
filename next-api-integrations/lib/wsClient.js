// lib/wsClient.js
import { useEffect, useState } from 'react';

// Array to hold all listener functions
let listeners = [];

// Establish WebSocket connection
const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,litecoin,ripple');

// Handle incoming messages from the WebSocket
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data); // Log the received data to the console

    // Notify all listeners of the new data
    listeners.forEach(listener => listener(data));
};

// Handle WebSocket errors
socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
};

// Custom hook to provide real-time crypto prices
export const useCryptoPrices = () => {
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const handleNewData = (data) => {

            // Update the prices state with the new data
            setPrices(prevPrices => ({ ...prevPrices, ...data }));
        };

        // Add this component's data handler to the listeners array
        listeners.push(handleNewData);

        return () => {
            // Remove this component's data handler when it unmounts
            listeners = listeners.filter(listener => listener !== handleNewData);
        };
    }, []);

    return prices;
};

