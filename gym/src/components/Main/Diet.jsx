import React, { useState } from 'react';
import './Diet.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const CaloriesChart = () => {
  const data = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        label: 'Calories Breakdown',
        data: [300, 500, 200], // Calories values for Protein, Carbs, Fat
        backgroundColor: ['#3a98e5', '#ec6157', '#ffd700'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        color: '#000', // Text color
        anchor: 'center',
        align: 'center',
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => value + 'gm', // Format the labels to show the value and 'cal'
      },
    },
  };
  return <Pie data={data} options={options} />;
};

function Diet() {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to manage popup visibility

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible); // Toggle the popup visibility
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-item active">
          <Link to="/dashboard1" className="sidebar-item active">
            <HomeIcon style={{ fontSize: 30 }} />
          </Link>
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div className="sidebar-item">
          <SearchIcon style={{ fontSize: 30 }} />
        </div>
        <div className="sidebar-item">
          <SettingsIcon style={{ fontSize: 30 }} />
        </div>
        <div className="sidebar-item" onClick={togglePopup}>
          {/* Toggle popup on click */}
          <SmartToyIcon style={{ fontSize: 30 }} />
        </div>
      </div>

      <main className="main-content">
        <div className="test">
          <h3 style={{ color: 'white', fontSize: 25, marginBottom: 20 }}>
            Analytics Overview
          </h3>
          <section className="progress-tracker-section">
            <div className="progress-tracker">
              <div className="progress-card blue">
                <RestaurantIcon />
                <h3>Average Proteins</h3>
                <p>380 mg</p>
                <div className="cs">
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>Cholesterol</div>
                    <div>Sodium</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>8 mg</span>
                    <span style={{ fontWeight: 'bold' }}>.098mg</span>
                  </div>
                </div>
              </div>
              <div className="progress-card green acarbs">
                <RestaurantIcon />
                <h3>Vitamins</h3>
                <p>120 mg</p>
                <div className="cs">
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>Cholesterol</div>
                    <div>Sodium</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>8 mg</span>
                    <span style={{ fontWeight: 'bold' }}>.098mg</span>
                  </div>
                </div>
              </div>
              <div className="progress-card yellow fat">
                <RestaurantIcon />
                <h3>Total Fat</h3>
                <p>94.6 KCL</p>
                <div className="cs">
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>Cholesterol</div>
                    <div>Sodium</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>8 mg</span>
                    <span style={{ fontWeight: 'bold' }}>.098mg</span>
                  </div>
                </div>
              </div>
              <div className="progress-card red carbs">
                <RestaurantIcon />
                <h3>Avg Carbohydrate</h3>
                <p>34.1 KCL</p>
                <div className="cs">
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>Cholesterol</div>
                    <div>Sodium</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>8 mg</span>
                    <span style={{ fontWeight: 'bold' }}>.098mg</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lowerdiet">
            <section className="calories-for-today-section">
              <div className="calories-for-today">
                <h3 style={{ color: 'white' }}>Calories for Today</h3>
                <div className="calories-chart">
                  <CaloriesChart />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Popup section */}
      {isPopupVisible && (
        <div className={`popup-container ${isPopupVisible ? 'show' : 'hide'}`}>
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
              <CloseIcon />
            </button>
            <h2>Popup Content</h2>
            <p>This is the popup triggered by the SmartToy icon.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Diet;
