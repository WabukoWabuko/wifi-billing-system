import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UsageGraph from '../components/UsageGraph';
import { getUser, getUserPackages, getNotifications, getTransactions } from '../services/api';

// User dashboard! I’m polishing this up for tomorrow’s presentation with loading states, empty states, and better error handling! – Me
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [userPackage, setUserPackage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userRes = await getUser();
        setUser(userRes.data[0]);

        const packageRes = await getUserPackages();
        setUserPackage(packageRes.data[0]);

        const notifRes = await getNotifications();
        setNotifications(notifRes.data);

        const transRes = await getTransactions();
        setTransactions(transRes.data);
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
      <Sidebar role="user" />
      <div className="container-fluid p-4">
        <h1 className="mb-4">User Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">My Device</h5>
                <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
                <p><strong>MAC:</strong> {user?.mac_address || 'N/A'}</p>
                <p><strong>Status:</strong> {user?.status || 'N/A'}</p>
                <p><strong>Package:</strong> {userPackage?.package?.speed || 'No Package'}</p>
                <p><strong>Expires At:</strong> {userPackage?.expiry_date ? new Date(userPackage.expiry_date).toLocaleString() : 'N/A'}</p>
                <button className="btn btn-primary mt-2">Renew</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Data Usage</h5>
                <UsageGraph used={userPackage?.data_used || 0} limit={userPackage?.data_limit || 0} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Notifications</h5>
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <p key={notif.id} className="mb-1">{notif.message} - {new Date(notif.created_at).toLocaleString()}</p>
                  ))
                ) : (
                  <p className="text-muted">No notifications yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Recent Transactions</h5>
                {transactions.length > 0 ? (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((trans) => (
                        <tr key={trans.id}>
                          <td>Ksh {trans.amount}</td>
                          <td>{trans.payment_method}</td>
                          <td>{trans.transaction_id}</td>
                          <td>{new Date(trans.created_at).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted">No transactions yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
