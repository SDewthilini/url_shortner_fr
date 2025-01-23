import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

export default function UsedDevicesChart({ shortUrl }) {
  const [data, setData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define colors for the chart

  // Dummy data
  const dummyData = [
    { name: 'Mobile', value: 45 },
    { name: 'Desktop', value: 30 },
    { name: 'Tablet', value: 15 },
    { name: 'Others', value: 10 },
  ];

  useEffect(() => {
    // Use dummy data instead of fetching
    setData(dummyData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value" // The value key for the number of clicks
          nameKey="name"  // The name key for the device type (e.g., mobile, desktop)
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
          formatter={(value) => <span style={{ color: "#333", fontSize: "14px" }}>{value}</span>} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
