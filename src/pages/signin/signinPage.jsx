// Signin.jsx (Main sign-in page)
import React from "react";
import { Container, Paper, Typography, Box, Button, Divider } from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";
import SignInForm from "./components/signInForm";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={5} style={{ padding: "30px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "15px" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333", letterSpacing: "1px", textTransform: "uppercase" }}>
            Sign In
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" color="error" startIcon={<Google />} fullWidth>
              Sign In with Google
            </Button>
            <Button variant="contained" color="primary" startIcon={<Facebook />} fullWidth>
              Sign In with Face
            </Button>
          </Box>
          <Divider sx={{ my: 2 }}>or</Divider>
          <SignInForm />
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Don't have an accou? <Button color="primary" onClick={() => navigate("/signup")} sx={{ textTransform: "none" }}>Sign up</Button>
          </Typography>
        </Paper>
      </Slide>
    </Container>
  );
};

export default Signin;
