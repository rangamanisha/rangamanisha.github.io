import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Manisha Ranga
        </Typography>
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#experience">Experience</Button>
          <Button color="inherit" href="#projects">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
