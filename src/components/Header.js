// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

// const Header = () => {
//   return (
//     <AppBar position="sticky" color="default" elevation={2}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h4" color="#DAB1DA">
//           MANISHA RANGA
//         </Typography>
//         <Box>
//           <Button color="inherit" href="#about">About</Button>
//           <Button color="inherit" href="#skills">Skills</Button>
//           <Button color="inherit" href="#experience">Experience</Button>
//           <Button color="inherit" href="#projects">Projects</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" color="#DAB1DA">
          MANISHA RANGA
        </Typography>
        
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button key={item.label} color="inherit" href={item.href}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.href} onClick={handleDrawerToggle}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
