import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../comp-u-bilt-logo-final.png';

const logoStyle = {width:'400px'};
const nav_link = {'fontSize' : '25px', "color" : "#20C38B"};
const navbarStyle = {'backgroundColor' : '#fff'};//663f3f
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={navbarStyle}>
      <Link 
        className="navbar-brand" 
        to="/">
       <img src={logo} style={logoStyle} alt="logo" className="logo"></img>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink style={nav_link}
            className={`nav-link  ${window.location.pathname === "/build" ? "text-danger" : ""}`} 
            to="/build">
            Build For Computer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={nav_link}
            className={`nav-link ${window.location.pathname === "/saved" ? "text-danger" : ""}`} 
            to="/saved">
            View Saved Build
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
