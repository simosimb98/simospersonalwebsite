import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;