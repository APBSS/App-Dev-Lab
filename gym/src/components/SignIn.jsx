import React from 'react';
import './SignIn.css'; // Import the CSS file
import signimg from '../images/1.jpg'

const SignIn = () => {
  return (
    <div className="signin">
      <form>
        <h2 className='signintitle' style={{marginBottom:30}}>Sign In</h2>
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
        <p className='signinbutton'>Sign In</p>
        <div className="signup-link">
          <p>Don't have an account? <a href="#register" >Register</a></p>
        </div>
        
      </form>
      
    </div>
  );
};

export default SignIn;
