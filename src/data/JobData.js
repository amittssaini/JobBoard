import linkdin from "../assets/linkdin.png";
import naukari from "../assets/naukari.png";
import hr from "../assets/hr.png";


/* 
here we design the hardcore data for cards job 
and one for the hiring team 
*/


const jobs = [
  {
    title: "UX/UI Designer",
    description: "We're on the lookout for a talented and detail-oriented UI/UX Designer...",
    tags: ["UX", "Work at Office"],
    location: "Mumbai",
    posted: "4 Days ago",
    logo: linkdin
  },
  {
    title: "Frontend Developer",
    description: "Build responsive UI using React.js for our platform...",
    tags: ["React", "Remote"],
    location: "Bangalore",
    posted: "2 Days ago",
    logo: naukari
  },
  {
    title: "Backend Engineer",
    description: "Design scalable backend systems using Node.js and MongoDB...",
    tags: ["Node.js", "Hybrid"],
    location: "Pune",
    posted: "6 Days ago",
    logo: linkdin,
    hiringTeam:{
      name:"Emma Watson",
       connectionLevel: "3rd",
      verified: true,
      profileImage: hr,
      roleSummary: [
        "Digital Transformation",
        "Digital Strategy",
        "AI",
        "MLI Managed Staffing Solutions",
        "Managed Service Provider/Recruitment Process Outsourcing",
        "Contingent Workforce Outsourcing",
        "Product Development",
        "Angel"
      ],
      messageButton: true
    }
  }
];

export default jobs;
