import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ProjectDetail = ({ title }) => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Detailed information about the {title} project goes here. You can include goals, technologies
        used, challenges faced, and accomplishments.
      </Typography>
    </Container>
  );
};

export default ProjectDetail;
