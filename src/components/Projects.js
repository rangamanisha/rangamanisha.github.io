import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "GIFTI Global",
    description: "A platform for global gifting solutions.",
    image: "https://giftiglobal.com/assets/images/logo.png", // Update with actual logo
    route: "/project/gifti-global",
  },
  {
    title: "Woblu",
    description: "A water optimization platform.",
    image: "https://woblu.ca/logo.png", // Update with actual logo
    route: "/project/woblu",
  },
  {
    title: "Studemp",
    description: "Cambrian College's student employment portal.",
    image: "https://studemp.cambriancollege.ca/images/logo.png", // Update with actual logo
    route: "/project/studemp",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Link to={project.route} style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
