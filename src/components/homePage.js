import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai">AI</Link></li>
            <li><Link to="/chat-box">ChatBox</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        <h1>Welcome to My Website</h1>
      </header>
      <main className="home-main">
        <section className="intro">
          <h2>Discover the World of Artificial Intelligence</h2>
          <p>AI is transforming the world around us. From self-driving cars to advanced data analysis, explore how AI is making a difference.</p>
        </section>
        <section className="graphics">
          <img src="https://via.placeholder.com/600x300" alt="AI Graphics" />
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
