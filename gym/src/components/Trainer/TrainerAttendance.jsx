import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import './TrainerAttendance.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';


import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


const TrainerAttendance = () => {
  // Data for Line Chart (Users Attendance over Time)
  const attendanceData = {
    labels: ['01 Jan', '31 Jan', '22 Feb', '15 Mar', '05 Apr', '26 Apr', '06 Jun', '29 Jun', '20 Jul'],
    datasets: [
      {
        label: 'Users Attendance',
        data: [60, 55, 65, 70, 60, 50, 55, 40, 45],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1,
      }
    ]
  };

  // Data for Doughnut Chart (User Gender Breakdown)
  const genderData = {
    labels: ['Man', 'Woman'],
    datasets: [
      {
        label: 'Gender Breakdown',
        data: [223, 200],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverOffset: 4,
      }
    ]
  };
  const options = {
    plugins: {
      datalabels: {
        color: '#000', // Text color
        anchor: 'center',
        align: 'center',
        font: {
          size: 15,
          weight: 'bold',
        },
        formatter: (value) => value , // Format the labels to show the value and 'cal'
      },
    },
  };
  return (
    <div className="tattendance">
        <Link to="/trainerdashboard" className="dietback"><ChevronLeftIcon style={{ fontSize: 30 }} /></Link>
        <div style={{display:'flex',justifyContent:"center"}}><h2 className='tattendance-title'>Client Attendance</h2></div>
      {/* Employees Info - Line Chart */}
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div className="employees-info">
        <h2>Users Info</h2>
        <Line data={attendanceData} />
      </div>
      <div className="stats">
          <h2>Users Availability</h2>
          <div style={{display:"flex",flexWrap:'wrap',gap:40,justifyContent:"center"}}>
          <div className="stat-item">
            <h3>Attendance</h3>
            <p>400</p>
          </div>
          <div className="stat-item">
            <h3>Late Coming</h3>
            <p>17</p>
          </div>
          <div className="stat-item">
            <h3>Absent</h3>
            <p>6</p>
          </div>
          <div className="stat-item">
            <h3>Leave Apply</h3>
            <p>14</p>
          </div>
          </div>
        </div>
      </div>
      <div className="tattendance-stats">
        <div className="total-users">
          <Doughnut data={genderData} options={options}/>
          <h3 style={{marginTop:20}}>Total Users - 423</h3>
        </div>
      </div>
    </div>
  );
};

export default TrainerAttendance;
