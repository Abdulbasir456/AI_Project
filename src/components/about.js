import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai">AI</Link></li>
            <li><Link to="/chat-box">ChatBox</Link></li>
          </ul>
        </nav>
        <h1>About Us</h1>
      </header>
      <main className="about-main">
        <h2>Our Story</h2>
        <p>Welcome to our about page. Here's some information about our company.</p>
        <button onClick={() => alert('More information coming soon!')}>Learn More</button>
      </main>
      <footer className="about-footer">
        <p>&copy; 2024 My Website</p>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai">AI</Link></li>
            <li><Link to="/chat-box">ChatBox</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default About;
