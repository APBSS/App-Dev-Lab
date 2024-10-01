import React, { useState } from 'react';
import './TrainerDiet.css';
import SearchIcon from '@mui/icons-material/Search'; 
import CloseIcon from '@mui/icons-material/Close';
import luffy from '../../images/person.png'


const initialUsers = [
  { id: 1, name: 'Liam Smith', age: 25, bmi: 'Pro' },
  { id: 2, name: 'Emma Johnson', age: 30, bmi: 'Pro' },
  { id: 3, name: 'Noah Williams', age: 28, bmi: 'Pro' },
  { id: 4, name: 'Olivia Brown', age: 22, bmi: 'Pro' },
  { id: 5, name: 'Ava Jones', age: 27, bmi: 'Pro' },
  { id: 6, name: 'Elijah Garcia', age: 35, bmi: 'Pro' },
  { id: 7, name: 'Sophia Martinez', age: 24, bmi: 'Pro' },
  { id: 8, name: 'Lucas Hernandez', age: 31, bmi: 'Pro' },
  { id: 9, name: 'Mia Davis', age: 29, bmi: 'Pro' },
  { id: 10, name: 'Jackson Lopez', age: 26, bmi: 'Pro' },
  { id: 11, name: 'Amelia Wilson', age: 32, bmi: 'Pro' },
  { id: 12, name: 'James Anderson', age: 29, bmi: 'Pro' },
];

function TrainerExercise() {
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

      <main className="trainer-main-content">
        <h3 className="trainer-title">Trainer's Exercise Suggestions</h3>
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
                  <p className="fitness-level">Level: {user.bmi}</p>
                </div>
                <div>
                  <p className="user-age">Age: {user.age}</p>
                  <p className="fitness-level">Level: {user.bmi}</p>
                </div>
              </div>
              </div></div>              
              <button className="suggest-button" onClick={() => togglePopup(user)}>
                Suggest Exercise
              </button>
            </div>
          ))}
        </div>
        {isPopupVisible && (
          <div className={`tpopup-container ${isPopupVisible ? 'show' : 'hide'}`}>
            <div className="tpopup-content">
              <button className="tclose-button" onClick={() => setIsPopupVisible(false)}>
                <CloseIcon style={{color:"red"}}/>
              </button>
              <h3 style={{fontSize:23,marginBottom:30}}>Diet Suggestions for {currentUser?.name}</h3>
              <form onSubmit={handleSubmit}>
                <div className="dropdown-group">
                  <label htmlFor="protein">Shoulder & Legs</label>
                  <select name="protein" value={dietDetails.protein} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="fats">Chest & Triceps</label>
                  <select name="fats" value={dietDetails.fats} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="vitamins">Back & Biceps</label>
                  <select name="vitamins" value={dietDetails.vitamins} onChange={handleChange} required>
                    <option value="">Select amount</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <textarea
                  name="suggestions"
                  placeholder="Additional workout suggestions..."
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

  );
}

export default TrainerExercise;
