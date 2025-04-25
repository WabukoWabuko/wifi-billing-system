// I’m adding a register function for new users! Let’s make registration smooth for the presentation! – Me
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
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
  console.log('Making request to:', config.baseURL + config.url);
  return config;
}, (error) => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

// Add a response interceptor for better error logging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Response error:', error.response || error.message);
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
