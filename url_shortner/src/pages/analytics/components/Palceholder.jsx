import { Box, Grid } from "@mui/material";
import React from "react";
import UsedDevicesChart from "./UsedDevicesChart";
import Map from "./Map";






export default function Holder() {
    return (
      <Box
        sx={{
          width: "100%",
          padding: 4,
          backgroundColor: "#eeeeee",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={4}>
          {/* Left: Map */}
          <Grid item xs={12} md={6}>
            <UsedDevicesChart/>
          </Grid>
  
          {/* Right: Placeholder Content */}
          <Grid item xs={12} md={6}>
            <Map/>

          </Grid>
        </Grid>
      </Box>
    );
  }