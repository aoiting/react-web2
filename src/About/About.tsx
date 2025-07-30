import React from 'react';
import './About.css';
import VideoJStest from '../Video/VideoJStest.tsx';


const About: React.FC = () => {
  const galleryImages = [
    {
      img: './src/design/pic1.png',
      title: 'Picture 1',
      description: 'pic 1',
    },
    {
      img: './src/design/pic2.png',
      title: 'Picture 2',
      description: 'pic 2',
    },
    {
      img: './src/design/pic3.png',
      title: 'Picture 3',
      description: 'pic 3',
    },
  ];

  return (
    <div className="container-design">
      <h3>This is the About Page</h3>

      <div>
        <VideoJStest videoId="75qBYnXB4r8" />
      </div>

    </div>
  );
};

export default About;