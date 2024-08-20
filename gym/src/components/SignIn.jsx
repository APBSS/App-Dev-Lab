import React from 'react';
import './SignIn.css'; // Import the CSS file
import { Link } from 'react-router-dom';

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
        <Link to="/Dashboard" style={{textDecoration:"none"}}><p className='signinbutton'>Sign In</p></Link>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/Register"><a href="#register" >Register</a></Link></p>
        </div>
        
      </form>
      
    </div>
  );
};

export default SignIn;
