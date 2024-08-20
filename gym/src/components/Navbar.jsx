import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav className='nav'>
          <ul>
            <h1 className='title'>Gains<span style={{color:"white"}}>+</span></h1>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            <Link to="/SignIn" className='button'><p>Sign in</p></Link>
          </ul>
        </nav>
    </div>

  )
}
