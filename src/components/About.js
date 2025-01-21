import React from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import profilePic from "../assets/images/profile.jpg";


const About = () => {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          src={profilePic}
          alt="Manisha Ranga"
          sx={{
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
            mx: "auto",
            mb: 2,
          }}
        />
        <Typography variant="h4" gutterBottom>
          Hello, I'm Manisha Ranga
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Visionary and results-driven Software Product Manager with over 7
          years of experience in software technology and logistics operations.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
