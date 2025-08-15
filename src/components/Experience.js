import React from "react";
import {
  Box,
  Typography,
  
  Paper,
} from "@mui/material";

//Here, importing the json object which is storing the job, role and description info in key, value pair.
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
  } from "@mui/lab";

const experiences = [
  {
    role: "Full Stack Product Team Lead",
    company: "Maple Wave",
    duration: "May 2025 – Present",
    description:
      "Leading a team of 5 to deliver microservices-based web applications for the telecom sector, leveraging C#, .NET, TypeScript, React, Docker, and Kubernetes, while managing sprints, fostering team collaboration, and providing technical leadership.",
  },
  {
    role: "Tech Leader and Ambassador",
    company: "Google Women Techmaker",
    duration: "July 2023 – Present",
    description:
      "Google Women Techmakers Leader and Ambassador, providing mentorship, fostering leadership in tech communities, and advocating for AI-driven innovation and inclusivity in technology.",
  },
  
  {
    role: "Senior Software Engineer",
    company: "North Cipher Valley Inc.",
    duration: "Sept 2024 – May 2025",
    description:
      "Developed mobile and web applications at North Cipher Valley, including CRM and ERP tools with advanced analytics, as well as retail, logistics, and supply chain solutions..",
  },
  {
    role: "Tech Advisor and Board Member",
    company: "Give To Africa",
    duration: "Nov 4 – March 2025",
    description:
      "Developed a web-based CRM platform for an African nonprofit to manage donor–donee relationships, run fundraising campaigns, and deliver operational and analytics insights.",
  },
  {
    role: "Senior Software Engineer",
    company: "Creative GOAT",
    duration: "July 2023 – Sept 2024",
    description:
      "Spearheaded the creation of user-centered design roadmaps. Authored epics and user stories that aligned with business objectives, driving a 20% increase in sprint success rates.",
  },
  {
    role: "Software Engineer",
    company: "Centre for Smart Mining",
    duration: "Nov 2022 – April 2023",
    description:
      "Implemented API integrations to improve system response times by 20% and enhanced CRM customizations, boosting user engagement by 35%.",
  },
  {
    role: "Software Engineer",
    company: "Cognizant Technologies",
    duration: "May 2021 – May 2022",
    description:
      "Designed and developed REST APIs in Node.js and Express, enhancing system modularity. Migrated JavaScript frontend to React.js, improved state management with Redux, and optimized CI/CD automation.",
  },
  {
    role: "Software Engineer",
    company: "Mannkey Electronics",
    duration: "Feb 2018  – May 2021",
    description:
      "Led enterprise application modernization by developing scalable UI components in React.js. Optimized backend APIs using .NET Core and SQL Server for enhanced performance.",
  },
];
// This is the experience component which shows the roles, timeline and the description of the job.
const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: "#DAB1DA" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "black" }}>
        Professional Experience
      </Typography>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  backgroundColor: "#ffffff",
                  border: "1px solid #90caf9",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" sx={{ color: "#0d47a1" }}>
                  {experience.role}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {experience.company} | {experience.duration}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {experience.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
