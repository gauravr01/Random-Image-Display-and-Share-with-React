import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import './App.css';

const App = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/400');
      setRandomImage(response.request.responseURL);
    } catch (error) {
      console.log('Error fetching image:', error);
    }
  };

  const handleShare = (platform) => {
    let shareUrl = '';

    // Adjust the URL based on the platform requirements
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="container">
      <h1>Random Image Display and Share with React</h1>
      <div className="image-container">
        <img src={randomImage} alt="Random" />
        <div className="share-buttons">
          <FacebookShareButton url={window.location.href}>
            Share on Facebook 
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            Share on Twitter
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href}>
            Share on WhatsApp
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default App;
// We can also use OOPS concept(inheritance and polymorphism) by extending Component 
// in RandomImage.js and ShareButton.js As i have mentioned both files
