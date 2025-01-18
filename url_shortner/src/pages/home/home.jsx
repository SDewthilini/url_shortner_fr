// HomePage.jsx
import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import UrlShortener from "./components/urlshortner";
import UrlCard from "./components/urlcard";


const HomePage = () => {
  const [urlList, setUrlList] = useState([]);




  

  const handleShortenUrl = (originalUrl, shortUrl) => {
    // Add new shortened URL to the list, which will trigger the rendering of UrlCard
    setUrlList((prevList) => [...prevList, { originalUrl, shortUrl }]);
  };

  const handleDeleteUrl = (shortUrl) => {
    setUrlList(urlList.filter((url) => url.shortUrl !== shortUrl));
  };

  const handleCopyUrl = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Shortened URL copied to clipboard!");
  };

  const handleStats = (shortUrl) => {
    alert(`Stats for ${shortUrl}`);
    // Implement stats logic here
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" color="primary" gutterBottom>
            URL Shortener
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Paste your long URL below and get a shortened link instantly!
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <UrlShortener  />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <Typography variant="body2" color="textSecondary" sx={{ mt: 4 }}>
            Powered by MR
          </Typography>
        </motion.div>
        {/* Render UrlCard components */}
        <Box sx={{ mt: 4 }}>
          {urlList.map((url, index) => (
            <UrlCard
              key={index}
              originalUrl={url.originalUrl}
              shortUrl={url.shortUrl}
              onDelete={handleDeleteUrl}
              onCopy={handleCopyUrl}
              onStats={handleStats}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
