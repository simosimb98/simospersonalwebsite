import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <>
    <body>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
          </Routes>
        </Router>
      </body>
    </>
  );
}

export default App;