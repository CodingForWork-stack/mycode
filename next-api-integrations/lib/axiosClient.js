// lib/axiosClient.js
import axios from 'axios';

// Create an Axios instance
const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for API requests
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add auth token to headers
axiosClient.interceptors.request.use(
    (config) => {
        const token = 'sample-token'; // Simulate adding an auth token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for global error handling
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access');
        } else if (error.response && error.response.status === 404) {
            console.error('Data not found');
        } else {
            console.error('An error occurred', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosClient;

