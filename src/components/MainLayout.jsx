import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import './MainLayout.css';
import { useLocation } from "react-router-dom";
import JobList from './JobList';

const MainLayout = () => {
  const location = useLocation();
  const { name, email } = location.state || {};  // that is used for the get the state props from login component
  const [activeTab,setActiveTab]=useState("job") // current active tab is openjob

  return (
    <div className="layout-wrapper">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="layout-body">
        <Sidebar name={name} email={email} />
        {(activeTab==="job")?<JobList />:<Home/>}  
      </div>
    </div>
  );
};

export default MainLayout;
