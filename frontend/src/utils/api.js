// src/utils/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Uses the proxy to forward to Django backend
});

export const getUsers = () => api.get('/users/');
export const getTickets = () => api.get('/tickets/');
export const getUsage = () => api.get('/usage/');
