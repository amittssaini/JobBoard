import React from "react";
import "./Navbar.css"; // or use Tailwind if preferred

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Nottingham <span>Building Society</span></h2>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Open Jobs</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="logout-btn">Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;
