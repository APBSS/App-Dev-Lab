import React from 'react';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
  return (
    <div className="container1">
      <form>
        <h2 className='signintitle'>Sign In</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className='button'>Sign In</button>
        <div className="signup-link">
          <p>Already registered? <a href="#register">Register here</a></p>
        </div>
      </form>
      <div className="image-container">
        <img src="https://via.placeholder.com/600x800" alt="Gym" />
      </div>
    </div>
  );
};

export default SignIn;
