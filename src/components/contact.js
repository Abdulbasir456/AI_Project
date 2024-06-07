import React  from "react";
import { Link } from 'react-router-dom';
import './home.css';

const Contact = () => {
    return (
        <div className="home-container">
        <header className="home-header">
          <nav className="navbar">

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/home-three">ThreeHome</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>

    );
};

export default Contact;