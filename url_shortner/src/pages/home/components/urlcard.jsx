import React from "react";
import { Card, CardContent, CardActions, Typography, IconButton, Tooltip, Box } from "@mui/material";
import { CopyAll, Delete, BarChart } from "@mui/icons-material";

const UrlCard = ({ originalUrl, shortUrl, onDelete, onCopy, onStats }) => {
  return (
    <Card
      sx={{
        mb: 2,
        boxShadow: 3,
        backgroundColor: "#e3f2fd", // Light blue background
        color: "#0d47a1", // Dark blue text
        maxWidth: 800, // Limit the card width
        mx: "auto", // Center align horizontally
      }}
    >
      <CardContent>
        {/* Content with text on the left */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="textSecondary">
              Original URL:
            </Typography>
            <Typography variant="body1" noWrap>
              {originalUrl}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Shortened URL:
            </Typography>
            <Typography variant="h6" color="primary">
              {shortUrl}
            </Typography>
          </Box>
          {/* Action icons on the right */}
          <CardActions>
            <Tooltip title="Copy URL">
              <IconButton color="primary" onClick={() => onCopy(shortUrl)}>
                <CopyAll />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Stats">
              <IconButton color="secondary" onClick={() => onStats(shortUrl)}>
                <BarChart />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete URL">
              <IconButton color="error" onClick={() => onDelete(shortUrl)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UrlCard;
