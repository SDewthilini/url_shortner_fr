import React, { useState, useEffect } from 'react';
import UrlCard from './urlcard';
import axiosServices from '../../../utills/axios';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [savedUrls, setSavedUrls] = useState([]);

  useEffect(() => {
    // Load saved URLs from localStorage on component mount
    const storedUrls = JSON.parse(localStorage.getItem('urls')) || [];
    setSavedUrls(storedUrls);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosServices.post("/api/short", {
        link: url,
        path: ''
      });

      console.log(res.data);

      const data = res.data;
      setShortUrl(data.url);

      // Save to localStorage if it's not already saved
      const newUrl = { originalUrl: url, shortUrl: data.url };
      const isUrlExist = savedUrls.some(item => item.shortUrl === data.url);

      if (!isUrlExist) {
        const updatedUrls = [...savedUrls, newUrl];
        setSavedUrls(updatedUrls);
        localStorage.setItem('urls', JSON.stringify(updatedUrls));
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  const handleDelete = (shortUrl) => {
    console.log('Deleting:', shortUrl); // Add this line
    const updatedUrls = savedUrls.filter(item => item.shortUrl !== shortUrl);
    setSavedUrls(updatedUrls);
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  };

  const handleStats = (url) => {
    console.log('Stats for:', url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten..."
          required
        />
        <button type="submit">Shorten URL</button>
      </form>

      {/* Display saved URL cards */}
      {savedUrls.map((item, index) => (
        <UrlCard
          key={index}
          originalUrl={item.originalUrl}
          shortUrl={item.shortUrl}
          onCopy={handleCopy}
          onDelete={handleDelete}
          onStats={handleStats}
        />
      ))}

      {/* Only render the new short URL card if it's not already in the saved list */}
      {shortUrl && !savedUrls.some(item => item.shortUrl === shortUrl) && (
        <UrlCard
          originalUrl={url}
          shortUrl={shortUrl}
          onCopy={handleCopy}
          onDelete={handleDelete}
          onStats={handleStats}
        />
      )}
    </div>
  );
};

export default UrlShortener;