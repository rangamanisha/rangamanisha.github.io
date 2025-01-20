// src/components/Contact.js
import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const Contact = () => {
  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: { xs: "100%", sm: 500 }, // Responsive width
          mx: "auto",
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" fullWidth required />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
