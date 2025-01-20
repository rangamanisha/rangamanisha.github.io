import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const projects = [
  {
    title: "RBC Real Estate Project",
    description:
      "Conducted market research, developed APIs to streamline policy updates, and enhanced customer customization.",
    image: "/assets/images/project1.jpg",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
