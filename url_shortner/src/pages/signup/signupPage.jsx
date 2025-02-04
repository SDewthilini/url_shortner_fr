// Signup.jsx
import React from "react";
import { Container, Paper, Typography, Box, Button, Divider, TextField, Alert } from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";
import axios from "axios";
import axiosServices from "../../utills/axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axiosServices.post("/user/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        // Redirect to signin page after 2 seconds
        setTimeout(() => {
          navigate("/register");
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={5} style={{ padding: "30px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "15px" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333", letterSpacing: "1px", textTransform: "uppercase" }}>
            Sign Up
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2 }}>Signup successful! Redirecting to login...</Alert>}

          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" color="error" startIcon={<Google />} fullWidth>
              Sign Up with Google
            </Button>
            <Button variant="contained" color="primary" startIcon={<Facebook />} fullWidth>
              Sign Up with Facebook
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>or</Divider>

          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                required
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Button 
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 1 }}
              >
                Sign Up
              </Button>
            </Box>
          </form>

          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account? <Button color="primary" onClick={() => navigate("/signin")} sx={{ textTransform: "none" }}>Sign in</Button>
          </Typography>
        </Paper>
      </Slide>
    </Container>
  );
};

export default Signup;