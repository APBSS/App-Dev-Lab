import React from 'react';
import './Home.css'; 
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container" id='home'>
      <Navbar />
      <main>
        <h2 style={{color:"white"}}>Welcome to Our Gym</h2>
        <p style={{color:"white"}}>Your fitness journey starts here. Join us to achieve your health and wellness goals with our top-notch facilities and expert trainers.</p>
        <Link className='button' to="/SignIn">Get Started</Link>
      </main>
      <footer>
        <p>&copy; 2024 Gym Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
