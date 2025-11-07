import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Main/Homepage';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Sidebar container */}
      <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main content container */}
      <div className="main-content-container">
        <Homepage />
        {/* Add more sections here if needed */}
      </div>
    </div>
  );
}

export default App;
