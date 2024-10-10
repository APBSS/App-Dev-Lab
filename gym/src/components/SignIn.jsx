import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import CloseIcon from '@mui/icons-material/Close';

const SignIn = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState(''); // Correct use of category
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('https://fictional-space-couscous-jv6wjg654q9fqvq9-8000.app.github.dev/gains/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, category }), // Send all fields
    });

    if (response.ok) {
      navigate('/login'); // Redirect to login page after successful registration
    } else {
      const errorData = await response.json();
      alert(errorData.error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fictional-space-couscous-jv6wjg654q9fqvq9-8000.app.github.dev/gains/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        navigate('/dashboard1');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const cancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="signin">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option disabled value="">Select Category</option>
              <option value="trainer">Trainer</option>
              <option value="gymuser">Gym User</option>
            </select>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <a href="#f">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {isLogoutModalOpen && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <CloseIcon onClick={cancelLogout} style={{ marginLeft: 290, cursor: 'pointer' }} />
            <h2>{message}</h2>
            <div className="modal-buttons"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
