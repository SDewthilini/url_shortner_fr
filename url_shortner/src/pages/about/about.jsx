import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>

        <Typography variant="h5" gutterBottom>
          Welcome to [Your URL Shortener Web App Name]
        </Typography>
        <Typography variant="body1" paragraph>
          At [Your URL Shortener Web App Name], we provide an easy and fast way to shorten and manage your long URLs. Whether you're a business, marketer, or just an everyday user, we help you reduce the complexity of long URLs into simple, shareable, and trackable links. Our service is completely free, and you can create as many short links as you need!
        </Typography>

        <Typography variant="h6" gutterBottom>
          Why Use Our URL Shortener?
        </Typography>
        <Typography variant="body1" paragraph>
          In today's digital age, managing URLs is essential for efficient content sharing and tracking. Here are a few reasons why you should use our URL shortener:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">- Shorten long URLs into easy-to-share links</Typography>
            <Typography variant="body1">- Track your links' performance (views, clicks, etc.)</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">- Free and unlimited URL shortening</Typography>
            <Typography variant="body1">- Simple, user-friendly interface</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Our Technology Stack
        </Typography>
        <Typography variant="body1" paragraph>
          We have built our URL shortener web app using the powerful MERN stack (MongoDB, Express.js, React, Node.js), ensuring fast, scalable, and secure services for our users. Here's how we utilize these technologies:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">MongoDB</Typography>
            <Typography variant="body2">A NoSQL database to store shortened URLs and track analytics securely and efficiently.</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Express.js</Typography>
            <Typography variant="body2">A backend framework used to handle URL shortening logic and API calls seamlessly.</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">React</Typography>
            <Typography variant="body2">A JavaScript library to build the interactive front-end interface, providing a smooth user experience.</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Node.js</Typography>
            <Typography variant="body2">A server-side runtime environment to handle high-speed requests and serve the application with efficiency.</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          Our vision is to make URL shortening easy, efficient, and accessible for everyone. We want to empower users and businesses with a simple solution to manage their links effectively, enabling better user engagement, easier sharing, and more insightful analytics.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Get Started Now
        </Typography>
        <Typography variant="body1" paragraph>
          Ready to start shortening your URLs? Join our platform today and simplify your online experience!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/shorten-url">
          Shorten Your URL
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;
