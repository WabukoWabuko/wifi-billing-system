import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { getUser, getTransactions, getNotifications } from '../services/api';

// Admin dashboard! I’m packing it with stats like in ClerkEx Image 3! – Me
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getUser();
        setUsers(userRes.data);

        const transRes = await getTransactions();
        setTransactions(transRes.data);

        const notifRes = await getNotifications();
        setNotifications(notifRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const totalRevenue = transactions.reduce((sum, trans) => sum + parseFloat(trans.amount), 0);

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="container-fluid p-4">
        <h1>Admin Dashboard</h1>
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
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Activity Log</h5>
                {notifications.map((notif) => (
                  <p key={notif.id}>{notif.message} - {new Date(notif.created_at).toLocaleString()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
