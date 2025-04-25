// I’m improving error handling in api.js for better debugging! – Me
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Directly point to the backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Making request to:', config.baseURL + config.url, 'with data:', config.data);
  return config;
}, (error) => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

// Add a response interceptor for better error logging
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.data);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export const login = (username, password) => api.post('/auth/jwt/create/', { username, password });
export const register = (username, password, phone, role) => api.post('/auth/users/', { username, password, phone, role });
export const getUser = () => api.get('/users/');
export const getPackages = () => api.get('/packages/packages/');
export const getUserPackages = () => api.get('/packages/user-packages/');
export const getUsageLogs = () => api.get('/usage/');
export const getNotifications = () => api.get('/notifications/');
export const getTransactions = () => api.get('/transactions/');

export default api;
