import React, { useState } from 'react';
import './ExerciseProgressTracking.css'
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ExerciseProgressTracking = () => {
  const progressData = {
    shoulders: [
      { exercise: 'Shoulder Press', sets: 4, reps: 10, weight: '40kg' },
      { exercise: 'Lateral Raise', sets: 3, reps: 12, weight: '10kg' },
    ],
    legs: [
      { exercise: 'Squats', sets: 4, reps: 10, weight: '60kg' },
      { exercise: 'Leg Press', sets: 3, reps: 12, weight: '80kg' },
    ],
    chest: [
      { exercise: 'Bench Press', sets: 4, reps: 8, weight: '70kg' },
      { exercise: 'Push-Ups', sets: 3, reps: 15, weight: 'Bodyweight' },
    ],
    triceps: [
      { exercise: 'Tricep Dips', sets: 4, reps: 10, weight: 'Bodyweight' },
      { exercise: 'Skull Crushers', sets: 3, reps: 12, weight: '25kg' },
    ],
    back: [
      { exercise: 'Deadlifts', sets: 4, reps: 8, weight: '100kg' },
      { exercise: 'Pull-Ups', sets: 3, reps: 8, weight: 'Bodyweight' },
    ],
    biceps: [
      { exercise: 'Bicep Curls', sets: 4, reps: 10, weight: '15kg' },
      { exercise: 'Hammer Curls', sets: 3, reps: 12, weight: '12kg' },
    ],
  };
  const [selectedTab, setSelectedTab] = useState('chest');
  
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="exercise-container">
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div className="sidebar exsidebar">
    <Link to="/dashboard1" className="exback"><ChevronLeftIcon style={{ fontSize: 30 }} /></Link>
    <div 
        className={`sidebar-item ${selectedTab === 'chest' ? 'active' : ''}`} 
        onClick={() => handleTabClick('chest')}
    >
        Chest
    </div>
    <div 
        className={`sidebar-item ${selectedTab === 'back' ? 'active' : ''}`} 
        onClick={() => handleTabClick('back')}
    >
        Back
    </div>
    <div 
        className={`sidebar-item ${selectedTab === 'shoulder' ? 'active' : ''}`} 
        onClick={() => handleTabClick('shoulder')}
    >
        Shoulder
    </div>

  </div>

      {selectedTab === "shoulder" && 
        <div className="exercise-section shoulders-legs">
        <h2 className="exercise-subtitle">Shoulders & Legs</h2>
        <div className="exercise-list">
          {progressData.shoulders.concat(progressData.legs).map((item, index) => (
            <div key={index} className="exercise-item">
              <p className="exercise-name">{item.exercise}</p>
              <p className="exercise-details">{item.sets} Sets x {item.reps} Reps @ {item.weight}</p>
            </div>
          ))}
        </div>
      </div>
      }

      {selectedTab === "chest" && 
        <div className="exercise-section chest-triceps">
        <h2 className="exercise-subtitle">Chest & Triceps</h2>
        <div className="exercise-list">
          {progressData.chest.concat(progressData.triceps).map((item, index) => (
            <div key={index} className="exercise-item">
              <p className="exercise-name">{item.exercise}</p>
              <p className="exercise-details">{item.sets} Sets x {item.reps} Reps @ {item.weight}</p>
            </div>
          ))}
        </div>
      </div>
      }

      {selectedTab === "back" && 
        <div className="exercise-section back-biceps">
        <h2 className="exercise-subtitle">Back & Biceps</h2>
        <div className="exercise-list">
          {progressData.back.concat(progressData.biceps).map((item, index) => (
            <div key={index} className="exercise-item">
              <p className="exercise-name">{item.exercise}</p>
              <p className="exercise-details">{item.sets} Sets x {item.reps} Reps @ {item.weight}</p>
            </div>
          ))}
        </div>
      </div>
      }

      </div>
    </div>
    
  );
};

export default ExerciseProgressTracking;
