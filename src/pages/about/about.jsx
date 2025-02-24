import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LinkIcon from "@mui/icons-material/Link";
import SpeedIcon from "@mui/icons-material/Speed";
import { useSpring, animated } from "@react-spring/web"; // Importing react-spring

export default function AboutUs() {
  const features = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      title: "Fast URL Shortening",
      description: "Generate short and efficient links in seconds to share anywhere.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#2e7d32" }} />,
      title: "Analytics Tracking",
      description: "Track clicks, usage patterns, and audience engagement seamlessly.",
    },
    {
      icon: <LinkIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
      title: "Customizable Links",
      description: "Create memorable, branded links for better reach and recognition.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 50, color: "#f57c00" }} />,
      title: "High Performance",
      description: "Enjoy a robust, lightning-fast platform that scales effortlessly.",
    },
  ];

  // Animation for the About Us section
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        bgcolor: "#f5f5f5",
      }}
    >
      {/* Animated Page Header */}
      <animated.div style={fadeIn}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, color: "#333", textAlign: "center" }}
          style={{marginTop:'80px'}}
        >
          About Us
        </Typography>
      </animated.div>

      {/* Animated Description */}
      <animated.div style={fadeIn}>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: "600px", textAlign: "center", color: "#555" }}
        >
          We aim to provide you with the best URL shortening experience, enhanced with real-time
          analytics, link customization, and performance-driven solutions.
        </Typography>
      </animated.div>

      {/* Features Section */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: "center",
                borderRadius: 2,
                bgcolor: "#fff",
              }}
            >
              {feature.icon}
              <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#333" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
