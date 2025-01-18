import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import UrlCard from "./urlcard";

const UrlShortener = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  
  const [ur, setUr] = useState(null);

  function handleClick(){
    setUr(<UrlCard/>);
  }

 

  const handleShorten = async () => {
    // if (!url.trim()) {
    //   alert("Please enter a valid URL.");
    //   return;
    // }
    // try {
    //   // Call the backend API to shorten the URL
    //   const response = await fetch("http://localhost:5000/api/shorten", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ originalUrl: url }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setShortUrl(data.shortUrl);
    //     onShorten(data.shortUrl); // Optional callback for parent
    //   } else {
    //     alert(data.message || "Error shortening the URL.");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("Failed to shorten URL.");
    // }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <TextField
        label="Paste your URL here"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ mb: 2 }}
      >
        Shorten URL
      </Button>

      {shortUrl && (
        <Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Your Shortened URL:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography variant="body1" sx={{ mr: 2 }}>
              {shortUrl}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigator.clipboard.writeText(shortUrl)}
            >
              Copy
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UrlShortener;
