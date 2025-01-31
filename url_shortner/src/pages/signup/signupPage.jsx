// Signup.jsx (Main signup page)
import React from "react";
import { Container, Paper, Typography, Box, Button, Divider } from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Slide } from "@mui/material";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={5} style={{ padding: "30px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "15px" }}>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" color="error" startIcon={<Google />} fullWidth>
              Sign Up with Google
            </Button>
            <Button variant="contained" color="primary" startIcon={<Facebook />} fullWidth>
              Sign Up with Facebook
            </Button>
          </Box>
          <Divider sx={{ my: 2 }}>or</Divider>
          <SignupForm />
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account? <Button color="primary" onClick={() => navigate("/signin")} sx={{ textTransform: "none" }}>Sign in</Button>
          </Typography>
        </Paper>
      </Slide>
    </Container>
  );
};

export default Signup;
