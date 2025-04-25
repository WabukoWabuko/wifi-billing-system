import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ResellerDashboard from './pages/ResellerDashboard';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Updated App.js for routing! I’m removing onEnter and adding a landing page for the presentation! – Me
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to={role === 'admin' ? '/admin' : role === 'reseller' ? '/reseller' : '/dashboard'} /> : <Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin" element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/reseller" element={isAuthenticated && role === 'reseller' ? <ResellerDashboard /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
