import React from 'react';
import './Diet.css';
import HomeIcon from '@mui/icons-material/Home';
import LoopIcon from '@mui/icons-material/Loop';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import RestaurantIcon from '@mui/icons-material/Restaurant';
function Diet() {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-item active">
          <HomeIcon />
        </div>
        <div className="sidebar-item">
          <LoopIcon />
        </div>
        <div className="sidebar-item">
          <SearchIcon />
        </div>
        <div className="sidebar-item">
          <SettingsIcon />
        </div>
      </div>
      
      <main className="main-content">
        <h3 style={{color:"black",fontSize:25,marginBottom:20}}>Analytics Overview :</h3>
        <section className="progress-tracker-section">
          <div className="progress-tracker">
            <div className="progress-card yellow">
              <RestaurantIcon />
              <h3>Average Proteins</h3>
              <p>380 mg</p>
              <div className='cs'>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <div>Cholesterol</div>
                <div>Sodium</div>
                </div>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <span style={{fontWeight:"bold"}}>8 mg</span>
                <span style={{fontWeight:"bold"}}>.098mg</span>
                </div>
              </div>
            </div>
            <div className="progress-card green acarbs">
                <RestaurantIcon />
              <h3>Average Carbs</h3>
              <p>120 mg</p>
              <div className='cs'>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <div>Cholesterol</div>
                <div>Sodium</div>
                </div>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <span style={{fontWeight:"bold"}}>8 mg</span>
                <span style={{fontWeight:"bold"}}>.098mg</span>
                </div>
              </div>
            </div>
            <div className="progress-card blue fat">
            <RestaurantIcon />
              <h3>Total Fat</h3>
              <p>94.6 KCL</p>
              <div className='cs'>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <div>Cholesterol</div>
                <div>Sodium</div>
                </div>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <span style={{fontWeight:"bold"}}>8 mg</span>
                <span style={{fontWeight:"bold"}}>.098mg</span>
                </div>
              </div>
            </div>
            <div className="progress-card red carbs">
            <RestaurantIcon />
              <h3>Avg Carbohydrate</h3>
              <p>34.1 KCL</p>
              <div className='cs'>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <div>Cholesterol</div>
                <div>Sodium</div>
                </div>
                <div style={{display:"flex",gap:30,justifyContent:'space-between'}}>
                <span style={{fontWeight:"bold"}}>8 mg</span>
                <span style={{fontWeight:"bold"}}>.098mg</span>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        <div className='lowerdiet'>
        <section className="calories-for-today-section">
          <div className="calories-for-today">
            <h3>Calories for Today</h3>
            <div className="calories-chart">
              {/* Add chart using a library like Chart.js or a custom solution */}
              <p>Chart coming soon...</p>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

export default Diet;
