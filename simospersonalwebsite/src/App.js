import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home.js';

function App() {
  return (
    <>
      <Router>
            <Navbar />
            <div className="page-content">
                <Routes>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/about" element={<About />}/>
                </Routes>
            </div>
      </Router>
    </>
  );
}

export default App;