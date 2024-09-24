import React, { useState } from 'react';
import './BMI.css'; // Add your custom CSS here

const BMI = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    sex: '',
    activity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add BMI calculation logic here
  };

  return (
    <div className="bmi-calculator-container">
      <h1>BODY MASS INDEX</h1>
      <h2>Calculate Your BMI Now</h2>
      <form onSubmit={handleSubmit} className="bmi-form">
        <div className="input-group">
          <input 
            type="number" 
            name="weight" 
            placeholder="Weight / KG" 
            value={formData.weight} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="number" 
            name="height" 
            placeholder="Height / CM" 
            value={formData.height} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="number" 
            name="age" 
            placeholder="Age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
          <select 
            name="sex" 
            value={formData.sex} 
            onChange={handleChange} 
            required
          >
            <option value="">Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <select 
            name="activity" 
            value={formData.activity} 
            onChange={handleChange}
            style={{width:220}}
          >
            <option value="">Select an activity factor</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (exercise 1-3 days/week)</option>
            <option value="moderate">Moderate (exercise 4-5 days/week)</option>
            <option value="active">Active (daily exercise or intense exercise 3-4 times/week)</option>
            <option value="very active">Very Active (intense exercise 6-7 days/week)</option>
          </select>
          <button type="submit" className="calculate-btn">CALCULATE NOW</button>
        </div>
      </form>
    </div>
  );
};

export default BMI;
