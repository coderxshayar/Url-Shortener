// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../public/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Url Shortener</h1>
        <p>Shorten your URLs quickly and easily</p>
        <div className="buttons">
          <button onClick={handleLogin} className="btn login-btn">Login</button>
          <button onClick={handleSignup} className="btn signup-btn">Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
