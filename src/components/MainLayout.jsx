import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import './MainLayout.css';
import JobList from './JobList';

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <JobList />
      </div>
    </div>
  );
};

export default MainLayout;
