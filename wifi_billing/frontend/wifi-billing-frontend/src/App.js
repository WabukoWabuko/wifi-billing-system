import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ResellerDashboard from './pages/ResellerDashboard';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Updated App.js with authentication! I’m making sure only logged-in users can access dashboards! – Me
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to={role === 'admin' ? '/admin' : role === 'reseller' ? '/reseller' : '/'} /> : <Login />} />
        <Route path="/" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin" element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/reseller" element={isAuthenticated && role === 'reseller' ? <ResellerDashboard /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Navigate to="/login" onEnter={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
