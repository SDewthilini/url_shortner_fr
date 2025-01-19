import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper } from '@mui/material';

export default function ClicksLineChart() {
  // Sample data: replace with actual data or API call
  const clicksData = [
    { name: 'Day 1', clicks: 2 },
    { name: 'Day 2', clicks: 5.5 },
    { name: 'Day 3', clicks: 2 },
    { name: 'Day 4', clicks: 8.5 },
    { name: 'Day 5', clicks: 1.5 },
    { name: 'Day 6', clicks: 5 },
    { name: 'Day 7', clicks: 7 },
  ];

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={clicksData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="clicks" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
