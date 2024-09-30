import React, { useState } from 'react';
import './TrainerDiet.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import SearchIcon from '@mui/icons-material/Search'; 
import luffy from '../../images/person.png'

const initialUsers = [
  { id: 1, name: 'Liam Smith', age: 25, bmi: 20 },
  { id: 2, name: 'Emma Johnson', age: 30, bmi: 18 },
  { id: 3, name: 'Noah Williams', age: 28, bmi: 26 },
  { id: 4, name: 'Olivia Brown', age: 22, bmi: 22 },
  { id: 5, name: 'Ava Jones', age: 27, bmi: 19 },
  { id: 6, name: 'Elijah Garcia', age: 35, bmi: 29 },
  { id: 7, name: 'Sophia Martinez', age: 24, bmi: 23 },
  { id: 8, name: 'Lucas Hernandez', age: 31, bmi: 17 },
  { id: 9, name: 'Mia Davis', age: 29, bmi: 27 },
  { id: 10, name: 'Jackson Lopez', age: 26, bmi: 24 },
  { id: 11, name: 'Amelia Wilson', age: 32, bmi: 25 },
  { id: 12, name: 'James Anderson', age: 29, bmi: 28 },
];

function TrainerDiet() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dietDetails, setDietDetails] = useState({
    protein: '',
    fats: '',
    vitamins: '',
    carbohydrates: '',
    suggestions: ''
  });

  const filteredUsers = initialUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePopup = (user) => {
    setCurrentUser(user);
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Diet suggestion submitted for:', currentUser.name, dietDetails);
    setIsPopupVisible(false);
  };

  const handleChange = (e) => {
    setDietDetails({
      ...dietDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="trainer-app">
      <div className="trainer-sidebar">
        <Link to="/trainerdashboard" className="sidebar-link">
          <ArrowBackIcon style={{ fontSize: 30, color: 'white' }} />
        </Link>
      </div>

      <main className="trainer-main-content">
        <h3 className="trainer-title">Trainer's Diet Suggestions</h3>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="search-icon" />
        </div>
        <div className="user-cards-container">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <div style={{display:"flex",justifyContent:"center",gap:50}}>
              <img src={luffy} alt='' className='uimg'></img>
              <div>
              <h4>{user.name}</h4>
              <div className='trainer-user-details'>
                <div>
                  <p className="user-age">Age: {user.age}</p>
                  <p className="fitness-level">BMI: {user.bmi}</p>
                </div>
                <div>
                  <p className="user-age">Age: {user.age}</p>
                  <p className="fitness-level">BMI: {user.bmi}</p>
                </div>
              </div>
              </div></div>              
              <button className="suggest-button" onClick={() => togglePopup(user)}>
                Suggest Diet
              </button>
            </div>
          ))}
        </div>

        {isPopupVisible && (
          <div className={`tpopup-container ${isPopupVisible ? 'show' : 'hide'}`}>
            <div className="tpopup-content">
              <button className="tclose-button" onClick={() => setIsPopupVisible(false)}>
                <CloseIcon />
              </button>
              <h3 style={{fontSize:23,marginBottom:30}}>Diet Suggestions for {currentUser?.name}</h3>
              <form onSubmit={handleSubmit}>
                <div className="dropdown-group">
                  <label htmlFor="protein">Protein</label>
                  <select name="protein" value={dietDetails.protein} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="fats">Fats</label>
                  <select name="fats" value={dietDetails.fats} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="vitamins">Vitamins</label>
                  <select name="vitamins" value={dietDetails.vitamins} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="carbohydrates">Carbohydrates</label>
                  <select name="carbohydrates" value={dietDetails.carbohydrates} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <textarea
                  name="suggestions"
                  placeholder="Additional diet suggestions..."
                  value={dietDetails.suggestions}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="submit-button">Submit Suggestion</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default TrainerDiet;
