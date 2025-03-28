import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "GIFTI Global",
    description: "A platform for global gifting solutions.",
    image: "https://giftiglobal.com/static/media/logo.deb8b8b0.svg", // Update with actual logo
    route: "https://giftiglobal.com/",
  },
  {
    title: "Woblu",
    description: "Mobile and Web app for Handy mans to get jobs.",
    image: "https://woblu.ca/wp-content/uploads/2024/06/Asset-6WOBLU.svg", // Update with actual logo
    route: "https://woblu.ca/",
  },
  {
    title: "Studemp",
    description: "Cambrian College's Alumni portal.",
    image: "https://studemp.cambriancollege.ca/site/images/2024-02-01/r79119343991315299214190440970158213462043242048r/CC_HOR_BURGGOLDr17353002947534202017678564902375078550251364043172r.png", // Update with actual logo
    route: "https://studemp.cambriancollege.ca/home.htm",
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
            <a href={project.route} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 150, // Adjust the height as needed
                    objectFit: "contain", // Ensures image fits properly inside the card
                    padding: "10px", // Adds spacing inside the card
                    backgroundColor: "#f5f5f5", // Optional: background color to handle transparency
                  }}
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" color="#702963">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
