// I’m setting up the API service to talk to our Django backend! This will make fetching data a breeze! – Me
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
  return config;
});

export const login = (username, password) => api.post('/auth/jwt/create/', { username, password });
export const getUser = () => api.get('/users/');
export const getPackages = () => api.get('/packages/packages/');
export const getUserPackages = () => api.get('/packages/user-packages/');
export const getUsageLogs = () => api.get('/usage/');
export const getNotifications = () => api.get('/notifications/');
export const getTransactions = () => api.get('/transactions/');

export default api;
