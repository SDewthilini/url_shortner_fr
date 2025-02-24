import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Use a reliable GeoJSON source
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Map() {
  return (
    <Box
      sx={{
       
        width: "100%",
        height: "500px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Title */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Clicks + Scans by Location
      </Typography>

      {/* Map Component */}
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <ComposableMap
          projectionConfig={{ scale: 150 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies, loading }) => {
              if (loading) {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                );
              }

              return geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#4E4E4E",
                      outline: "none",
                    },
                    hover: {
                      fill: "#4CAF50",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      outline: "none",
                    },
                  }}
                />
              ));
            }}
          </Geographies>
        </ComposableMap>
      </Box>
    </Box>
  );
}
