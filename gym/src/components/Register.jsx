import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <form>
        <h2 className='signintitle' style={{marginBottom:30}}>Register</h2>
        <label>Username:</label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
        />
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
        <p className='signinbutton'>Register</p>
        <div className="signup-link">
          <p>Already have an account? <Link to="/SignIn"><a href="#register" >Sign In</a></Link></p>
        </div>
        
      </form>
      
    </div>
  );
};

export default Register;
