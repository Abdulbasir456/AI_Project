import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/homePage";
import About from "./components/about";
import AI from './components/AI';
import ChatBox  from './components/chatBox';


function App() {

  return (
    <Router>
      <div className="App">

            <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/ai" element={<AI />} />
              <Route path="/chat-box" element={<ChatBox />} />
    
            </Routes>
          </div>
       
    </Router>
  );
}

export default App;

