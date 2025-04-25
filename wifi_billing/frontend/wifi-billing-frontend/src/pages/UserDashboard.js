import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UsageGraph from '../components/UsageGraph';
import { getUser, getUserPackages, getUsageLogs, getNotifications, getTransactions } from '../services/api';

// User dashboard! I removed DashboardCard and usage since we weren’t using them. Clean code for the win! – Me
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [userPackage, setUserPackage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getUser();
        setUser(userRes.data[0]);

        const packageRes = await getUserPackages();
        setUserPackage(packageRes.data[0]);

        const usageRes = await getUsageLogs();
        // I removed the unused 'usage' variable since we’re already showing data_used in UsageGraph! – Me

        const notifRes = await getNotifications();
        setNotifications(notifRes.data);

        const transRes = await getTransactions();
        setTransactions(transRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar role="user" />
      <div className="container-fluid p-4">
        <h1>User Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Device</h5>
                <p><strong>Username:</strong> {user?.username}</p>
                <p><strong>MAC:</strong> {user?.mac_address}</p>
                <p><strong>Status:</strong> {user?.status}</p>
                <p><strong>Package:</strong> {userPackage?.package?.speed}</p>
                <p><strong>Expires At:</strong> {new Date(userPackage?.expiry_date).toLocaleString()}</p>
                <button className="btn btn-primary">Renew</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <UsageGraph used={userPackage?.data_used || 0} limit={userPackage?.data_limit || 0} />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                {notifications.map((notif) => (
                  <p key={notif.id}>{notif.message} - {new Date(notif.created_at).toLocaleString()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Transactions</h5>
                <table className="table">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
