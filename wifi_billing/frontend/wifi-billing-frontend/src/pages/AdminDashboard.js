import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { getUser, getTransactions, getNotifications } from '../services/api';

// Admin dashboard! I’m adding loading states and empty states for a polished look tomorrow! – Me
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userRes = await getUser();
        setUsers(userRes.data);

        const transRes = await getTransactions();
        setTransactions(transRes.data);

        const notifRes = await getNotifications();
        setNotifications(notifRes.data);
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

  const totalRevenue = transactions.reduce((sum, trans) => sum + parseFloat(trans.amount), 0);

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="container-fluid p-4">
        <h1 className="mb-4">Admin Dashboard</h1>
        <div className="row">
          <div className="col-md-3">
            <DashboardCard title="Revenue This Month" value={`Ksh ${totalRevenue}`} color="bg-success" link="/finance" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Active Users" value={users.filter(u => u.status === 'active').length} color="bg-primary" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Expired Users" value={users.filter(u => u.status === 'expired').length} color="bg-danger" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Total Users" value={users.length} color="bg-info" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Activity Log</h5>
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <p key={notif.id} className="mb-1">{notif.message} - {new Date(notif.created_at).toLocaleString()}</p>
                  ))
                ) : (
                  <p className="text-muted">No activity logs yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
