import React from 'react';

// A reusable card component for dashboards! I’m making it colorful like in the ClerkEx images! – Me
const DashboardCard = ({ title, value, color, link }) => {
  return (
    <div className={`card text-white ${color} mb-3`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
        {link && <a href={link} className="text-white">View Reports</a>}
      </div>
    </div>
  );
};

export default DashboardCard;
