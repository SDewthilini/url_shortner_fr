import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export default function TotalClicksCard({dailyClicks,header, subheading, footer}) {
    return (
       
            <Grid item xs={12} sm={4}>
                <Card sx={{ boxShadow: 3, backgroundColor: "#e3f2fd", color: "#0d47a1" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e88e5" }}>
                            {header}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                            {subheading}
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                            {dailyClicks}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic", color: "#0d47a1" }}>
                            {footer}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
       

    )
}
