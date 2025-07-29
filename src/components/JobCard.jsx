import React from "react";
import "./JobCard.css";

import { FaCheck, FaHeart, FaCalendarAlt, FaMapMarkerAlt,FaUserCircle, FaFlag } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2>{job.title}</h2>
        <FaHeart className="heart-icon" />
      </div>

      <p className="job-description">{job.description}</p>

      <div className="job-tags">
        {job.tags.map((tag, idx) => (
          <span className="tag" key={idx}>
            <FaCheck className="icon" /> {tag}
          </span>
        ))}
      </div>

      {/* Row 1: Location + Logo */}
      <div className="meta-row">
        <span className="tag">
          <FaMapMarkerAlt className="icon" /> {job.location}
        </span>
        <img src={job.logo} alt="logo" className="job-logo" />
      </div>

      {/* Row 2: Calendar days + Report Button */}
      <div className="meta-row">
        <span className="tag">
          <FaCalendarAlt className="icon" /> {job.posted}
        </span>
        <button className="report-btn">
          <FaFlag className="icon" /> Report
        </button>
      </div>
      {job.hiringTeam && (
  <div className="hiring-team-card">
    <h3 className="hiring-title">Meet the hiring team</h3>

    <div className="member-card">
      <div className="profile">
        <div className="profile-avatar">
  <FaUserCircle className="profile-icon" />
  {job.hiringTeam.profileImage && (
    <img
      src={job.hiringTeam.profileImage}
      alt={job.hiringTeam.name}
      className="profile-image-on-icon"
    />
  )}
</div>
        <div className="info">
          <div className="name-row">
            <strong>{job.hiringTeam.name}</strong>
            {job.hiringTeam.verified && <FaCheck className="verified-icon" />}
            <span className="connection-level">• {job.hiringTeam.connectionLevel}</span>
          </div>
          <p className="summary">
            {job.hiringTeam.roleSummary.join(" | ")}
          </p>
        </div>
      </div>

      {job.hiringTeam.messageButton && (
        <button className="message-button">Message</button>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default JobCard;
