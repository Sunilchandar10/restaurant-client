import axios from 'axios';

// Define your base URL here. E.g., from environment variables.
const BASE_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 10000, // Optional: add a timeout
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Modify request before sending it, e.g., attach auth token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Process response data
    return response.data;
  },
  (error) => {
    // Centralized error handling
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
