import React from "react";
import { Box, Typography } from "@mui/material";

const skills = [
  { icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", label: "React JS" },
  { icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", label: "Node.js" },
  { icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", label: "Version Control" },
  { icon: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", label: "Cloud Computing" },
  { icon: "https://cdn.worldvectorlogo.com/logos/data-science-1.svg", label: "Data Science" },
  { icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png", label: "Artificial Intelligence" },
  { icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", label: "Jira" },
  { icon: "https://cdn-icons-png.flaticon.com/512/3493/3493249.png", label: "Scrum" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", label: "Agile" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png", label: "Collaboration" },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: "#333" }}>
        These Are The Tools and Skills I Use to Build Stuff
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gap: 4,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={skill.icon}
              alt={skill.label}
              title={skill.label}
              sx={{
                width: 60,
                height: 60,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <Typography variant="body2" sx={{ color: "#555", fontWeight: "bold" }}>
              {skill.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
