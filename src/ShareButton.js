import React from 'react';
import RandomImage from './RandomImage';
import ShareButton from './ShareButton';

const App = () => {
  return (
    <div className="container">
      <h1>Random Image Display and Share with React</h1>
      <div className="image-container">
        <RandomImage />
        <div className="share-buttons">
          <ShareButton url={window.location.href} platform="facebook" />
          <ShareButton url={window.location.href} platform="twitter" />
          <ShareButton url={window.location.href} platform="whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default App;
