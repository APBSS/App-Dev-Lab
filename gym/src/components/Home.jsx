import React from 'react';
import './Home.css'; 
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import InputWrapper from './InputWrapper';

const Home = () => {
  return (
    <>
      <div className="container" id='home'>
      <Navbar />
      <main>
        <InputWrapper />
        <p style={{color:"white"}}>Your fitness journey starts here. Bringing people together through Gains+ that unites fitness and efficiency</p>
        <Link className='button' to="/SignIn">Get Started</Link>
      </main>
      </div>
      <About />
      <Services />
      <footer id='footer' style={{backgroundColor:"black"}}>
        <p>&copy; 2024 Gym Management System. All rights reserved.</p>
        <Footer />
      </footer>
    </>
      
    
  );
};

export default Home;
