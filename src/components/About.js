import React from "react";
import { Box, Typography, Container, Avatar, Grid } from "@mui/material";
import profilePic from "../assets/images/profile.jpg";

const About = () => {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          src={profilePic}
          alt="Manisha Ranga"
          sx={{
            width: { xs: 120, sm: 160 },
            height: { xs: 120, sm: 160 },
            mx: "auto",
            mb: 3,
          }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hello, I'm Manisha Ranga
        </Typography>
        <Typography variant="h6" color="#702963" gutterBottom>
          Software Engineer | Full-Stack Developer | AI Enthusiast
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          I’m a problem-solving, innovation-driven Software Engineer with a passion for building scalable, high-performance applications. With 6+ years of experience in React.js, JavaScript, .NET (C#), Node.js, Express.js, MySQL, MongoDB, and cloud technologies, I specialize in modern web and mobile development, AI-driven solutions, and system optimization.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          As a Google Women Techmakers Ambassador and GDG Organizer, I mentor, speak, and teach, empowering women in tech and driving the future of software innovation. Whether it's full-stack development, product management, or AI-powered analytics, I thrive on creating impactful tech solutions.
        </Typography>

        <Typography variant="h5" color="#702963" sx={{ mt: 4, mb: 2 }}>
          Why Work With Me?
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ textAlign: "left", maxWidth: "700px", mx: "auto" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              🚀 <strong>Innovative Thinker</strong> – I create customized solutions tailored to business needs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              📊 <strong>Data-Driven & Analytical</strong> – I leverage data analytics for smarter decision-making.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              💡 <strong>Adaptable & Curious Learner</strong> – Always exploring AI, automation, and cloud advancements.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              🌍 <strong>Community Leader & Speaker</strong> – Passionate about mentoring, teaching, and tech advocacy.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              🔍 <strong>Open to New Opportunities</strong> – Excited to explore software engineering, product management, and AI-driven solutions.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" color="#702963" sx={{ mt: 4 }}>
          Let’s Connect!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          If you’re looking for an experienced Full-Stack Developer, Software Engineer, or Product Manager who can drive business success through innovative solutions, let’s connect!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
