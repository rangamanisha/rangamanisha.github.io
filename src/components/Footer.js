import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "#F3F4F6",
        borderTop: "1px solid #E5E7EB",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" gutterBottom>
        Connect with me
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <IconButton
          component={Link}
          href="https://github.com/rangamanisha"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/manisharanga"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:rangamanisha11@gmail.com"
          color="inherit"
        >
          <Email />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Manisha Ranga. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;



