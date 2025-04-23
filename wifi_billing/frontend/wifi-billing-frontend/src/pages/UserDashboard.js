import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import UsageGraph from '../components/UsageGraph';
import { getUser, getUserPackages, getUsageLogs, getNotifications } from '../services/api';

// User dashboard! I’m making it look sleek like in GalaxyRAD Image 1! – Me
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [userPackage, setUserPackage] = useState(null);
  const [usage, setUsage] = useState({ upload: 0, download: 0 });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getUser();
        setUser(userRes.data[0]); // Assuming the first user is the logged-in user

        const packageRes = await getUserPackages();
        setUserPackage(packageRes.data[0]);

        const usageRes = await getUsageLogs();
        const latestUsage = usageRes.data[usageRes.data.length - 1] || { upload: 0, download: 0 };
        setUsage(latestUsage);

        const notifRes = await getNotifications();
        setNotifications(notifRes.data);
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
      </div>
    </div>
  );
};

export default UserDashboard;
