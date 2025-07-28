import React from 'react';
import './Home.css';
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="homepage-container">
  <div className="hero-section">
    <h1>
      Find <span>the</span> most exciting <br />
      remote-friendly jobs
    </h1>
    <p className="hero-description">
      Jobsek is our love letter to find remote or onsite work with 45,000+ Jobs. Unlock your new career working from anywhere in the world
    </p>

    <div className="search-bar">
      <div className="search-input">
        <i className="fas fa-briefcase"></i>
        <input type="text" placeholder="Job title or keyword" />
      </div>
      <div className="search-input">
        <i className="fas fa-map-marker-alt"></i>
        <input type="text" placeholder="Anywhere" />
      </div>
      <button className="search-button">Search</button>
    </div>

    <div className="filters">
      <select><option>Date of posting</option></select>
      <select><option>Type of employment</option></select>
      <select><option>Work experience</option></select>
      <select><option>Salary</option></select>
    </div>

    <div className="resume-section">
      <h2>Upload your resume</h2>
      <p>Upload your CV to get matching Jobs</p>
    </div>
  </div>
</div>

  );
};

export default Home;
