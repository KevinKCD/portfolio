import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';
import Profile from '../Images/Profile.png';

const navItems = [
  { name: 'Home', path: '/', icon: 'bi-house' },
  { name: 'About', path: '/', icon: 'bi-person' },
  { name: 'Resume', path: '/services', icon: 'bi-file-earmark-text' },
  { name: 'Contact', path: '/products', icon: 'bi-envelope' },
];

const socialIcons = ['bi-instagram', 'bi-linkedin', 'bi-github'];

function Navbar({ collapsed, setCollapsed }) {
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Profile */}
      <div className="sidebar-brand text-center mb-4">
        <div className="profile-circle">
          <img src={Profile} alt="Profile" className="profile-picture" />
        </div>
        {!collapsed && <h2 className="brand-name">Kevin Doan</h2>}
      </div>

      {/* Toggle button */}
      <button
        className="btn btn-outline-light w-100 mb-3 d-lg-none toggle-btn"
        onClick={toggleSidebar}
      >
        {collapsed ? 'Open Menu' : 'Close Menu'}
      </button>

      {/* Social icons */}
      {!collapsed && (
        <div className="icon-links text-center mb-4">
          {socialIcons.map(icon => (
            <i key={icon} className={`bi ${icon} me-3 social-icon`} />
          ))}
        </div>
      )}

      {/* Navigation links */}
      <ul className="nav flex-column nav-links-list mb-4">
        {navItems.map(item => (
          <li key={item.name} className="nav-item">
            <Link className="nav-link" to={item.path}>
              <i className={`bi ${item.icon} me-2`}></i>
              {!collapsed && item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search + Sign Up */}
      {!collapsed && (
        <form className="d-flex flex-column p-3">
          <input
            className="form-control nav-search-input mb-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light nav-search-btn mb-3" type="submit">
            <i className="bi bi-search me-1"></i> Search
          </button>
          <Link to="/sign-up" className="text-center">
            <button className="btn btn-outline-light nav-signup-btn">
              <i className="bi bi-person-plus me-1"></i> SIGN UP
            </button>
          </Link>
        </form>
      )}
    </nav>
  );
}

export default Navbar;
