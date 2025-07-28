import React from 'react';
import { FaSearch, FaHeart, FaBriefcase, FaTachometerAlt, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({name,email}) => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <h4>{name}</h4>
        <p>{email}</p>
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
