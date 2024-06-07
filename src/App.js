

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/homePage";
import About from "./components/about";
import HomeThree from './components/homeThree';
import Contact from './components/contact';



function App() {

  return (
    <Router>
      <div className="App">

            <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/home-three" element={<HomeThree />} />
              <Route path="/contact" element={<Contact />} />
            

    
            </Routes>
          </div>
       
    </Router>
  );
}

export default App;


/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homePage';
import About from './components/about';
import AI from './components/AI';
import ChatBox from './components/chatBox';
import HomeThree from './components/homeThree';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/chat-box" element={<ChatBox />} />
          <Route path="/home-three" element={<HomeThree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
