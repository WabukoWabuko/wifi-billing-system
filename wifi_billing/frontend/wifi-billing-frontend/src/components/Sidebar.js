import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Sidebar component for navigation! I’m adding logout logic here for a smoother experience! – Me
const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="text-center">WiFi Billing</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to={role === 'admin' ? '/admin' : role === 'reseller' ? '/reseller' : '/dashboard'}>Dashboard</Link>
        </li>
        {role === 'user' && (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/packages">Packages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tickets">Tickets</Link>
            </li>
          </>
        )}
        {role === 'admin' && (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/finance">Finance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/reports">Reports</Link>
            </li>
          </>
        )}
        {role === 'reseller' && (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/vouchers">Vouchers</Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <button className="nav-link text-white bg-transparent border-0" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
