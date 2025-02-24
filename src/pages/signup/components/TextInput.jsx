import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ label, name, value, onChange, type = "text" }) => {
  return <TextField fullWidth label={label} name={name} value={value} onChange={onChange} type={type} variant="outlined" />;
};

export default TextInput;

