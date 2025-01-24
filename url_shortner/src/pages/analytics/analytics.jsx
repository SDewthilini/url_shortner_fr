import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import TotalClicksChart from "./components/totalClicksChart";
import TotalClicksCard from "./components/totalClicksCard";


import Holder from "./components/Palceholder";


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

            <h1
                style={{
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #ff7f50, #6a5acd, #32cd32)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    animation: 'fadeIn 2s ease-in-out',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
                Totals Clicks for latest 7 days...
            </h1>


            <TotalClicksChart />

            <Box sx={{ mt: 9 }} />

            <Grid container spacing={2}>
                {/* Daily Clicks Card */}


                <TotalClicksCard
                    dailyClicks={dailyClicks}
                    header={"🌞 Your Daily Clicks"}
                    subheading={"Let's see how your link is performing today!"}
                    footer={"Keep pushing for more clicks!"}
                />


                {/* Weekly Clicks Card */}

                <TotalClicksCard
                    dailyClicks={weeklyClicks}
                    header={"📅 Your Weekly Clicks"}
                    subheading={"Here’s how your link has been performing this week!"}
                    footer={" Keep it up! Your link’s performance is improving."}
                />


                {/* Monthly Clicks Card */}

                <TotalClicksCard
                    dailyClicks={monthlyClicks}
                    header={"📊 Your Monthly Clicks"}
                    subheading={"Let’s take a look at your long-term link performance."}
                    footer={" You're doing amazing! Let's keep this momentum going."}
                />

            </Grid>

            <Box sx={{ mt: 9 }} />

            <Holder/>

           


        </Box>
    );
};

export default ClickStats;
