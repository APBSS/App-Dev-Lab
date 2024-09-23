import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate,Link } from 'react-router-dom';
import './Dashboard1.css';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Attendance',
        data: [10, 12, 8, 11, 14, 15, 10],
        borderColor: '#ff9800',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#e0e0e0' },
      },
      x: {
        ticks: { color: '#e0e0e0' },
      },
    },
    plugins: {
      legend: {
        labels: { color: '#e0e0e0' },
      },
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    setIsMenuOpen(false);
  };

  const confirmLogout = () => {
    // Perform logout actions here
    navigate('/');
  };

  const cancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu">
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
        {isMenuOpen && (
          <div className="menu-content">
            <ul>
              <li onClick={() => handleMenuClick('/dashboard1')}>Home</li>
              <li onClick={() => handleMenuClick('/profile')}>Profile</li>
              <li onClick={() => handleMenuClick('/settings')}>Settings</li>
              <li onClick={handleLogoutClick}>Logout</li>
            </ul>
          </div>
        )}
        <h1 className="dashboard-header">Welcome to <span style={{color:"#FF4742"}}>Gains</span>+</h1>
        <p></p>
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={confirmLogout}>
                Yes, Logout
              </button>
              <button className="modal-button cancel" onClick={cancelLogout}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-grid">
        <div className="dashboard-card large">
          <h6>Attendance Tracking</h6>
          <Line data={attendanceData} options={options} />
        </div>

        <div className="dashboard-card white-theme">
          <h6>Diet Plans</h6>
          <ul className="dashboard-list white-theme">
            <li className="dashboard-list-item white-theme">Create a New Diet Plan</li>
            <li className="dashboard-list-item white-theme">Customize Existing Plans</li>
            <li className="dashboard-list-item white-theme">View Suggested Plans</li>
          </ul>
          <Link to="/diet" id='dietlink'><button className="dashboard-button white-theme" onClick={() => navigate('/diet-plans')}>
            Manage Diet Plans
          </button></Link>
        </div>

        <div className="dashboard-card">
          <h6>Online Sessions</h6>
          <ul className="dashboard-list">
            {['Yoga Session - 10 AM', 'HIIT Session - 12 PM', 'Strength Training - 5 PM'].map((session, index) => (
              <li key={index} className="dashboard-list-item">{session}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card">
          <h6>Member Feedback</h6>
          <ul className="dashboard-list">
            {['Great gym! Loving the atmosphere.', 'The trainers are really helpful.', 'Could use more equipment.'].map(
              (feedback, index) => (
                <li key={index} className="dashboard-list-item">{feedback}</li>
              )
            )}
          </ul>
        </div>

        <div className="dashboard-card white-theme">
          <h6>Reports</h6>
          <button className="dashboard-button white-theme" onClick={() => navigate('/reports')}>
            View Reports
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard1;
