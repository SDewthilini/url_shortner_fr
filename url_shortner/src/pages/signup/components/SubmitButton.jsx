import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ text }) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {text}
    </Button>
  );
};

export default SubmitButton;
