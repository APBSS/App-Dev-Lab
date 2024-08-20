import React from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>Gym Management Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h3>Attendance Tracking</h3>
          <p>Monitor and manage member attendance.</p>
          <a href="#attendance">View Details</a>
        </div>
        <div className="dashboard-card">
          <h3>Diet Plans</h3>
          <p>Create and assign personalized diet plans.</p>
          <a href="#diet-plans">View Details</a>
        </div>
        <div className="dashboard-card">
          <h3>Online Sessions</h3>
          <p>Schedule and manage online training sessions with trainers.</p>
          <a href="#online-sessions">View Details</a>
        </div>
        <div className="dashboard-card">
          <h3>Member Feedback</h3>
          <p>Collect and review feedback from gym members.</p>
          <a href="#feedback">View Details</a>
        </div>
        <div className="dashboard-card">
          <h3>Reports</h3>
          <p>Generate and analyze various gym performance reports.</p>
          <a href="#reports">View Details</a>
        </div>
        <div className="dashboard-card">
          <h3>Settings</h3>
          <p>Manage system settings and preferences.</p>
          <a href="#settings">View Details</a>
        </div>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Gym Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
