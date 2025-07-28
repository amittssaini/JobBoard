import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({activeTab,setActiveTab}) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Nottingham <span>Building Society</span></h2>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={()=>setActiveTab("home")}>Home</li>
          <li className={activeTab === 'job' ? 'active' : ''} onClick={()=>setActiveTab("job")}>Open Jobs</li>
          <li >About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="logout-btn" onClick={()=>{
         navigate('/', { replace: true })
        }}>Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;
