import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { getUser } from '../services/api';

// Reseller dashboard! I’m focusing on customer management like in GalaxyRAD Image 1! – Me
const ResellerDashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getUser();
        setCustomers(userRes.data.filter(user => user.role === 'user')); // Only show users as customers
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar role="reseller" />
      <div className="container-fluid p-4">
        <h1>Reseller Dashboard</h1>
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
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Customer List</h5>
                <table className="table">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerDashboard;
