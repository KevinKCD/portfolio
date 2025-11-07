import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Main/Homepage/Homepage';
import About from './components/Main/About/About';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div className="main-content-container">
          <div id="home">
            <Homepage />
          </div>
          <div id="about">
            <About />
          </div>
          {/* Add more sections with IDs as needed */}
        </div>
      </div>
    </Router>
  );
}

export default App;
