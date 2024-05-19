import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AI.css';

const AIModelInteraction = () => {
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    // Placeholder for actual AI model interaction
    setResponse('This is a response from the AI model.');
  };

  return (
    <div className="ai-interaction">
      <h2>Interact with Our AI Model</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleAsk}>Ask the AI</button>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

const ChatBox = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="ai-container">
      <header className="ai-header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai">AI</Link></li>
            <li><Link to="/chat-box">ChatBox</Link></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <h1>Artificial Intelligence</h1>
        {menuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/ai" onClick={toggleMenu}>AI</Link></li>
            </ul>
          </div>
        )}
      </header>
      <main className="ai-main">
        <section className="ai-intro">
          <h2>What is AI?</h2>
          <p>AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.</p>
        </section>
        <section className="ai-model">
          <AIModelInteraction />
        </section>
      </main>
      <footer className="ai-footer">
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

export default ChatBox;
