import React, { useState } from 'react';
import './OnlineSession.css'; // Updated CSS
import { FaUserCircle, FaClock } from 'react-icons/fa';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

const OnlineSession = () => {
    const sessions = [
        {
          id: 1,
          trainerName: 'John Doe',
          date: '2024-09-30',
          time: '10:00 AM - 11:00 AM',
          status: 'Upcoming', // Can be 'Upcoming', 'Ongoing', or 'Completed'
        },
        {
          id: 2,
          trainerName: 'Jane Smith',
          date: '2024-09-30',
          time: '2:00 PM - 3:00 PM',
          status: 'Ongoing',
        },
        {
          id: 3,
          trainerName: 'Michael Johnson',
          date: '2024-09-29',
          time: '1:00 PM - 2:00 PM',
          status: 'Completed',
        },
      ];
      
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Default: today's date

  const handleCancelSession = (sessionId) => {
    // Logic for cancelling the session
    console.log(`Session ${sessionId} cancelled`);
  };

  const handleRescheduleSession = (sessionId) => {
    // Logic for rescheduling the session
    console.log(`Session ${sessionId} rescheduled`);
  };

  // Filter sessions for the selected date
  const filteredSessions = sessions.filter(
    (session) => session.date === selectedDate
  );

  return (
    <div className="online-session">
      <Link to="/dashboard1" className="dietback"><ChevronLeftIcon style={{ fontSize: 30 }} /></Link>
      <div style={{display:'flex',justifyContent:"center"}}><h3 className='online-title'>Online Sessions</h3></div>
      <div className="header">
        <h3>Your Sessions for <span style={{color:"#e74c3c"}}>{selectedDate}</span></h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {filteredSessions.length > 0 ? (
        <div className="session-list">
          {filteredSessions.map((session) => (
            <div className="session-item" key={session.id}>
              <div className="session-details">
                <div className="session-trainer">
                  <FaUserCircle /> Trainer: {session.trainerName}
                </div>
                <div className="session-status">
                  Status: {session.status} {/* e.g., "Upcoming", "Ongoing", "Completed" */}
                </div>
                <div className="session-time">
                  <FaClock /> {session.time}
                </div>
              </div>

              <div className="session-actions">
                {session.status === 'Upcoming' && (
                  <>
                    <button
                      className="cancel-button"
                      onClick={() => handleCancelSession(session.id)}
                    >
                      Cancel
                    </button>
                    <button
                      className="reschedule-button"
                      onClick={() => handleRescheduleSession(session.id)}
                    >
                      Reschedule
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No sessions for this day.</p>
      )}
    </div>
  );
};

export default OnlineSession;
