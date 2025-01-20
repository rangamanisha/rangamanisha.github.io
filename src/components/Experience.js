import React from "react";
import {
  Box,
  Typography,
  
  Paper,
} from "@mui/material";
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
    role: "Software Product Manager",
    company: "Philips Consulting",
    duration: "Dec 2024 – Present",
    description:
      "Led the design, development, and implementation of innovative product roadmaps. Successfully managed cross-functional teams and delivered customer-focused solutions, improving adoption by 30%.",
  },
  {
    role: "Software Product Manager",
    company: "Creative GOAT",
    duration: "July 2023 – Sept 2024",
    description:
      "Spearheaded the creation of user-centered design roadmaps. Authored epics and user stories that aligned with business objectives, driving a 20% increase in sprint success rates.",
  },
  {
    role: "Software Product Developer",
    company: "Centre for Smart Mining",
    duration: "Nov 2022 – April 2023",
    description:
      "Implemented API integrations to improve system response times by 20% and enhanced CRM customizations, boosting user engagement by 35%.",
  },
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: "#e3f2fd" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#0d47a1" }}>
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
