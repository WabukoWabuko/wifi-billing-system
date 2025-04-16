import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Add a request interceptor to include the JWT token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getUsers = () => api.get('/users/');
export const getTickets = () => api.get('/tickets/');
export const getUsage = () => api.get('/usage/');
