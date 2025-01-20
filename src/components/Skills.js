import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { Storage, Cloud, BarChart } from "@mui/icons-material";

const skills = [
  { title: "Product Leadership", icon: <BarChart />, details: "Roadmaps, KPI definition" },
  { title: "Cloud Computing", icon: <Cloud />, details: "Azure, GCP, Power BI" },
  { title: "Data Analytics", icon: <Storage />, details: "Big Data, AI, and advanced analytics" },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          px: 2,
          py: 4,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
          },
        }}
      >
        {skills.map((skill, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 250,
              maxWidth: 300,
              mx: "auto",
              height: "100%",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  width: 60,
                  height: 60,
                  mx: "auto",
                  mb: 2,
                }}
              >
                {skill.icon}
              </Avatar>
              <Typography variant="h6">{skill.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
