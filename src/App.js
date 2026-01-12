import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Main/Homepage/Homepage";
import About from "./components/Main/About/About";
import "./App.css";
import Resume from "./components/Main/Resume/Resume";
import Contact from "./components/Main/Contact/Contact";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Sidebar container */}
      <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main content container */}
      <div className="main-content-container">
        <Homepage />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
