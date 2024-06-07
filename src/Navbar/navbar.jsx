import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <div className="logo-placeholder">Logo</div>
        </div>
        <div className="navbar-links">
          <a href="#incubate-hub">Incubate Hub</a>
          <a href="#hackculture">HackCulture</a>
        </div>
      </div>
      <div className="navbar-register">
        <button>Register Now</button>
      </div>
    </div>
  );
}

export default Navbar;
