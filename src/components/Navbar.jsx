import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() 
{
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3'>
        <span className='navbar-brand fw-bold'>House Rental Application</span>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className='collapse navbar-collapse' id="navbarNav">
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item mx-2'><Link className="nav-link" to="/owners">Owners</Link></li>
                <li className='nav-item mx-2'><Link className='nav-link' to="/properties">Properties</Link></li>
                <li className='nav-item mx-2'><Link className='nav-link' to="/bookings">Bookings</Link></li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar
