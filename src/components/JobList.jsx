import React from "react";
import JobCard from "./JobCard";
import jobs from "../data/JobData";

const JobList = () => {
  return (
    <div style={{ padding: "20px" }}>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
