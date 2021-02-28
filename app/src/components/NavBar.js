import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function NavBar() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggler = ()  => setIsOpen(!isOpen)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <p className="navbar-brand">Start Bootstrap</p>
        <button onClick={handleToggler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : '' }`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink 
                className="nav-link"
                to="/"
                isActive={() => pathname === '/' || pathname === '/home'}
                activeStyle={{ color: "red" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link"
                isActive={() => pathname === '/about'}
                to="/about"
                activeStyle={{ color: "red" }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
