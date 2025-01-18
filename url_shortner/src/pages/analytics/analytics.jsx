import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const ClickStats = ({ shortUrl }) => {
  const [dailyClicks, setDailyClicks] = useState(0);
  const [weeklyClicks, setWeeklyClicks] = useState(0);
  const [monthlyClicks, setMonthlyClicks] = useState(0);

  useEffect(() => {
    // Fetch daily, weekly, and monthly click counts on component mount
    fetchClickStats("daily");
    fetchClickStats("weekly");
    fetchClickStats("monthly");
  }, []);

  const fetchClickStats = async (period) => {
    try {
      const response = await fetch(`/api/get-click-stats?shortUrl=${shortUrl}&period=${period}`);
      const data = await response.json();
      if (period === "daily") setDailyClicks(data.totalClicks);
      if (period === "weekly") setWeeklyClicks(data.totalClicks);
      if (period === "monthly") setMonthlyClicks(data.totalClicks);
    } catch (error) {
      console.error("Error fetching click stats", error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Daily Clicks Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#e3f2fd", color: "#0d47a1" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e88e5" }}>
                🌞 Your Daily Clicks
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                Let's see how your link is performing today!
              </Typography>
              <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                {dailyClicks}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic", color: "#0d47a1" }}>
                Keep pushing for more clicks!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Weekly Clicks Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#e3f2fd", color: "#0d47a1" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                📅 Your Weekly Clicks
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                Here’s how your link has been performing this week!
              </Typography>
              <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                {weeklyClicks}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic", color: "#0d47a1" }}>
                Keep it up! Your link’s performance is improving.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Clicks Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 3, backgroundColor: "#e3f2fd", color: "#0d47a1" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                📊 Your Monthly Clicks
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                Let’s take a look at your long-term link performance.
              </Typography>
              <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                {monthlyClicks}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic", color: "#0d47a1" }}>
                You're doing amazing! Let's keep this momentum going.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClickStats;
