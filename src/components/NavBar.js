import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          <span>Platform</span>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </li>
        {/* Repeat similar code for other menu items */}
        <li><a href="#">Developers</a></li>
        <li className="dropdown">
          <span>Blogs & Resources</span>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </li>
        <li><a href="#">Login</a></li>
      </ul>
      <button className="demo-button">Request Demo</button>
    </nav>
  );
};

export default NavBar;
