import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

export default function UsedDevicesChart({ shortUrl }) {
  const [data, setData] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Define colors for the chart

  // Dummy data
  const dummyData = [
    { name: "Mobile", value: 45 },
    { name: "Desktop", value: 30 },
    { name: "Tablet", value: 15 },
    { name: "Others", value: 10 },
  ];

  useEffect(() => {
    // Use dummy data instead of fetching
    setData(dummyData);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        height: "400px",
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
        Used Devices Breakdown
      </Typography>

      {/* Chart Component */}
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value" // The value key for the number of clicks
              nameKey="name" // The name key for the device type (e.g., mobile, desktop)
              cx="50%"
              cy="40%" // Adjust the vertical position of the chart to make space for the legend
              innerRadius={50}
              outerRadius={100}
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              formatter={(value) => (
                <span style={{ color: "#333", fontSize: "14px" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
