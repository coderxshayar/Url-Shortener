import React from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
    
  return (
    <nav className={`navbar ${isLoggedIn ? 'navbar-logged-in' : 'navbar-logged-out'}`}>
      <div className="navbar-logo">Short URL</div>
      {/* <div className="navbar-links">
        <NavLink to="/home" className="navbar-link">Home</NavLink>
        <NavLink to="/about" className="navbar-link">About</NavLink>
        <NavLink to="/contact" className="navbar-link">Contact</NavLink>
      </div> */}
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button onClick={onLogout} className="navbar-button">Logout</button>
        ) : (
          <NavLink to="/login" className="navbar-button">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
