import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { getUser } from '../services/api';

// Reseller dashboard! I’m making it presentation-ready with loading states and empty states! – Me
const ResellerDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userRes = await getUser();
        setCustomers(userRes.data.filter(user => user.role === 'user'));
      } catch (error) {
        setError('Failed to load data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex">
      <Sidebar role="reseller" />
      <div className="container-fluid p-4">
        <h1 className="mb-4">Reseller Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <DashboardCard title="Total Customers" value={customers.length} color="bg-info" />
          </div>
          <div className="col-md-4">
            <DashboardCard title="Active Customers" value={customers.filter(c => c.status === 'active').length} color="bg-success" />
          </div>
          <div className="col-md-4">
            <DashboardCard title="Expired Customers" value={customers.filter(c => c.status === 'expired').length} color="bg-danger" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Customer List</h5>
                {customers.length > 0 ? (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map(customer => (
                        <tr key={customer.id}>
                          <td>{customer.username}</td>
                          <td>{customer.status}</td>
                          <td>{new Date(customer.created_at).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted">No customers yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerDashboard;
