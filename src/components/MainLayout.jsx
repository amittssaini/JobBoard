import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import './MainLayout.css';
import { useLocation } from "react-router-dom";
import JobList from './JobList';

const MainLayout = () => {
  const location = useLocation();
  const { name, email } = location.state || {};
  
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="layout-body">
        <Sidebar name={name} email={email} />
        <JobList />
      </div>
    </div>
  );
};

export default MainLayout;
