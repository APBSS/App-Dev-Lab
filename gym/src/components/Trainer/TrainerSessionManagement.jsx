import React, { useState } from 'react';
import './TrainerSessionManagement.css'; // Updated CSS for trainer's session management
import { FaClock, FaUsers } from 'react-icons/fa';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


const TrainerSessionManagement = () => {
  const initialSessions = [
    {
      id: 1,
      sessionTitle: 'Morning Yoga',
      userNames: ['Alice Johnson', 'Bob Williams'],
      date: '2024-10-01',
      time: '10:00 AM - 11:00 AM',
      status: 'Upcoming',
    },
    {
      id: 2,
      sessionTitle: 'HIIT Training',
      userNames: ['Charlie Brown'],
      date: '2024-10-01',
      time: '2:00 PM - 3:00 PM',
      status: 'Ongoing',
    },
    {
      id: 3,
      sessionTitle: 'Strength Building',
      userNames: ['David Lee'],
      date: '2024-09-29',
      time: '1:00 PM - 2:00 PM',
      status: 'Completed',
    },
    {
      id: 4,
      sessionTitle: 'Evening Meditation',
      userNames: ['Alice Johnson'],
      date: '2024-09-30',
      time: '5:00 PM - 6:00 PM',
      status: 'Upcoming',
    },
  ];

  const [sessions, setSessions] = useState(initialSessions);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedUser, setSelectedUser] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [newSession, setNewSession] = useState({
    sessionTitle: '',
    userNames: [],
    date: selectedDate,
    time: '',
  });

  const handleStartSession = (sessionId) => {
    console.log(`Session ${sessionId} started`);
  };

  const handleEndSession = (sessionId) => {
    console.log(`Session ${sessionId} ended`);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSession((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSession = () => {
    if (newSession.sessionTitle && newSession.userNames.length > 0 && newSession.time) {
      setSessions((prevSessions) => [
        ...prevSessions,
        { ...newSession, id: prevSessions.length + 1, status: 'Upcoming' },
      ]);
      setShowPopup(false);
      setNewSession({ sessionTitle: '', userNames: [], date: selectedDate, time: '' });
    }
  };

  const filteredSessions = sessions.filter((session) =>
    session.userNames.includes(selectedUser) || selectedUser === ''
  ).filter((session) => session.date === selectedDate);

  return (
    <div className="trainer-session-management">
      <Link to="/trainerDashboard" className="back-button">
        <ChevronLeftIcon style={{ fontSize: 30,color:"white" }} />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3 className="trainer-title">Trainer's <span style={{color:"#e74c3c"}}>Online Sessions</span></h3>
      </div>
      <div className="trainer-session-header">
        <h3>
          Sessions for <span style={{ color: '#e74c3c' }}>{selectedDate}</span>
        </h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">All Users</option>
          {sessions.flatMap(session => session.userNames).map((user, index) => (
            <option key={index} value={user}>{user}</option>
          ))}
        </select>
        <p className="trainer-session-create-button" onClick={() => setShowPopup(true)}>
          Create Session
        </p>
      </div>

      {filteredSessions.length > 0 ? (
        <div className="trainer-session-list">
          {filteredSessions.map((session) => (
            <div className="trainer-session-item" key={session.id}>
              <div className="trainer-session-details">
                <div className="trainer-session-title">
                  <FaUsers /> <span>{session.sessionTitle}</span>
                </div>
                <div className="trainer-session-users">
                  <strong>Participants:</strong> <span>{session.userNames.join(', ')}</span>
                </div>
                <div className="trainer-session-status">
                  <strong>Status:</strong> <span>{session.status}</span>
                </div>
                <div className="trainer-session-time">
                  <FaClock /> <span>{session.time}</span>
                </div>
              </div>

              <div className="trainer-session-actions">
                {session.status === 'Upcoming' && (
                  <button
                    className="trainer-session-start-button"
                    onClick={() => handleStartSession(session.id)}
                  >
                    Start Session
                  </button>
                )}
                {session.status === 'Ongoing' && (
                  <button
                    className="trainer-session-end-button"
                    onClick={() => handleEndSession(session.id)}
                  >
                    End Session
                  </button>
                )}
                <button className="trainer-session-cancel-button">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No sessions for this day.</p>
      )}

      {showPopup && (
        <div className="trainer-session-popup">
          <div className="trainer-session-popup-content">
            <div onClick={() => setShowPopup(false)}>
                <CloseIcon style={{color:"red",position:"absolute",right:15,top:15,cursor:"pointer"}}/>
            </div>
            <h4 className="trainer-session-popup-heading">Create Session</h4>
            <label>
              User:
              <select onChange={(e) => setNewSession(prev => ({ ...prev, userNames: [e.target.value] }))}>
                <option value="">Select User</option>
                {sessions.flatMap(session => session.userNames).map((user, index) => (
                  <option key={index} value={user}>{user}</option>
                ))}
              </select>
            </label>
            <label>
              Date:
              <input type="date" name="date" value={newSession.date} onChange={handleInputChange} />
            </label>
            <label>
              Time:
              <input type="text" name="time" placeholder="e.g. 3:00 PM - 4:00 PM" onChange={handleInputChange} />
            </label>
            <label>
              Session Title:
              <input type="text" name="sessionTitle" value={newSession.sessionTitle} onChange={handleInputChange} />
            </label>
            <div className="trainer-session-popup-buttons">
              <button onClick={handleCreateSession} style={{backgroundColor:"#2d9c2f"}}>Done</button>
              <button onClick={() => setShowPopup(false)} style={{backgroundColor:"#c0392b"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className='trainer-handwriting'>
        <div className='handwriting-names'>
          {sessions.flatMap(session => session.userNames).map((user, index) => (
            <p>{user}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerSessionManagement;
