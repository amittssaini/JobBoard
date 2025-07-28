import React from 'react';
import { FaSearch, FaHeart, FaBriefcase, FaTachometerAlt, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <h4>Tom Hiddleston</h4>
        <p>tomhidd@gmail.com</p>
      </div>

      <ul className="sidebar-menu">
        <li><FaSearch className="icon" /> Search Job</li>
        <li><FaHeart className="icon" /> Favorites</li>
        <li><FaBriefcase className="icon" /> Interview prep</li>
        <li><FaTachometerAlt className="icon" /> Dashboards</li>
      </ul>
    </div>
  );
};

export default Sidebar;
