import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInput label="Full Name" name="username" value={formData.username} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput label="Password" name="password" value={formData.password} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton text="Sign Up" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm;