import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ResellerDashboard from './pages/ResellerDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Main App component with routing! I’m setting up the navigation for our dashboards! – Me
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/reseller" element={<ResellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
