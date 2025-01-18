import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "#ffffff",
        py: 3,
        px: 2,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/" color="inherit" underline="hover" display="block">
            Home
          </Link>
          <Link href="/about" color="inherit" underline="hover" display="block">
            About Us
          </Link>
          <Link href="/services" color="inherit" underline="hover" display="block">
            Services
          </Link>
          <Link href="/contact" color="inherit" underline="hover" display="block">
            Contact
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <Link href="https://facebook.com" target="_blank" color="inherit">
              <Facebook sx={{ mx: 1 }} />
            </Link>
            <Link href="https://twitter.com" target="_blank" color="inherit">
              <Twitter sx={{ mx: 1 }} />
            </Link>
            <Link href="https://instagram.com" target="_blank" color="inherit">
              <Instagram sx={{ mx: 1 }} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedIn sx={{ mx: 1 }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 3, fontSize: "0.9rem", opacity: 0.8 }}
      >
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
