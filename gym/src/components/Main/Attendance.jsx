import React, { useState } from 'react';
import './Attendance.css'
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import green tick icon
import CancelIcon from '@mui/icons-material/Cancel'; // Import cancel icon for 'X'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
// Locale configuration
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Gym attendance days with attendance status
const gymDays = [
  { start: new Date(2024, 8, 5), end: new Date(2024, 8, 5), attended: true },
  { start: new Date(2024, 8, 8), end: new Date(2024, 8, 8), attended: false },
  { start: new Date(2024, 8, 10), end: new Date(2024, 8, 10), attended: true },
  // Add more gym days here
];

// Custom Toolbar
const CustomToolbar = () => {
  return (
    <div style={{ display: 'none' }}>
      {/* Custom toolbar can include custom content if needed */}
    </div>
  );
};

const Attendance = () => {
  const [events] = useState(gymDays);

  const customEventPropGetter = () => ({
    style: { backgroundColor: 'transparent', color: 'red', fontSize: '24px', textAlign: 'center' },
  });

  const CustomEvent = ({ event }) => {
    return (
      <span className="gym-day-indicator">
        {event.attended ? (
          <CheckCircleIcon style={{ color: 'green', fontSize: '24px' }} />
        ) : (
          <CancelIcon style={{ color: 'red', fontSize: '24px' }} />
        )}
      </span>
    );
  };

  return (
    <div className="attendance">
      <Link to="/dashboard1">
        <ChevronLeftIcon style={{ fontSize: 30,color:"white",backgroundColor:"black",borderRadius:20,position:"absolute",top:20,left:15}} />
      </Link>
      <div className="amain-chart">        
        <div className="acalendar-container">
        <h3 className='attendtitle'>Attendance</h3>
          <div className='acalendar'>   
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 400, width: 510, backgroundColor: "#f9f9f9", borderBottomLeftRadius: 50, borderBottomRightRadius: 50, padding: 20 }}
              eventPropGetter={customEventPropGetter}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar, // Use the custom toolbar here
              }}
            />
          </div>
        </div>
      </div>
      <div className="aside-info">
        <div className="ainfo-card">
          <p id='info-p'>Total Gym Visits</p>
          <h3 id='info-h'>{events.filter(event => event.attended).length}</h3>
        </div>
        <div className="ainfo-card">
          <p id='info-p'>Days Missed</p>
          <h3 id='info-h'>{events.filter(event => !event.attended).length}</h3>
        </div>
        <div className="ainfo-card">
          <p id='info-p'>Current Streak</p>
          
          <h3 id='info-h'>5 Days <FontAwesomeIcon icon={faFire} style={{color:"#FF4742",fontSize:25}}/></h3>
        </div>
        <div className="ainfo-card">
          <p id='info-p'>Goals Met</p>
          <h3 id='info-h'>80%</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Attendance;
