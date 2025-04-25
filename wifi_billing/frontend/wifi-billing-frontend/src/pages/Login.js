import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, getUser } from '../services/api';

// A login page to get users into the system! I’m adding a link to the register page! – Me
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem('token', response.data.access);
      const userResponse = await getUser();
      const user = userResponse.data[0];
      localStorage.setItem('role', user.role);
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'reseller') navigate('/reseller');
      else navigate('/');
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError('Login endpoint not found. Ensure the backend is running at http://localhost:8000 and the endpoint /api/auth/jwt/create/ is available.');
        } else if (err.response.status === 401) {
          setError('Invalid credentials. Please check your username and password.');
        } else {
          setError(`Login failed: ${err.response.data.detail || 'Unknown error'}`);
        }
      } else {
        setError('Unable to connect to the server. Please ensure the backend is running at http://localhost:8000.');
      }
      console.error('Login error:', err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
