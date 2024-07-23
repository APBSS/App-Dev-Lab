import React from 'react'
import '../components/Navbar.css'

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
            <p className='button'>Sign in</p>
          </ul>
        </nav>
    </div>

  )
}
