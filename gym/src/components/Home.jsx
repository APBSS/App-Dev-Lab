import React from 'react';
import './Home.css'; 
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container" id='home'>
      <Navbar />
      <main>
        <h2 style={{color:"white"}}>Experience the Future of<span style={{color:"#ff5722",fontSize:"3rem"}}> Gym </span>Efficiency</h2>
        <p style={{color:"white"}}>Your fitness journey starts here. Bringing people together through a gym management system that unites fitness and efficiency</p>
        <Link className='button' to="/SignIn">Get Started</Link>
      </main>
      <footer>
        <p>&copy; 2024 Gym Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
