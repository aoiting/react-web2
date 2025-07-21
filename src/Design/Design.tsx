import React from 'react';
import './Design.css';

import WSPGallery from './components/WSPGallery';

const Design: React.FC = () => {
  const galleryImages = [
    {
      img: './src/assets/pic1.png',
      title: 'Picture 1',
      description: 'pic 1',
    },
    {
      img: './src/assets/pic2.png',
      title: 'Picture 2',
      description: 'pic 2',
    },
    {
      img: './src/assets/pic3.png',
      title: 'Picture 3',
      description: 'pic 3',
    },
  ];

  return (
    <div className="container-design">
      <h3>This is the Design Page</h3>
      <WSPGallery galleryImages={galleryImages} />
    </div>
  );
};

export default Design;