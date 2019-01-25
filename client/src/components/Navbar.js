import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../COMP-U-BILT.png';

const logoStyle = {width:'100px'}
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/">
       <img src={logo} style={logoStyle} alt="logo" className="logo"></img>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/build" ? "text-danger" : ""}`} 
            to="/build">
            Build For Computer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/saved" ? "text-danger" : ""}`} 
            to="/saved">
            View Saved Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
