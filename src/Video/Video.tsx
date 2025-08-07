import React from 'react';
import VideoGrids from './VideoGrids.tsx';
import './video.css';


function Video(){
  return (

<div className='video-container'>
  <div className='video-banner'>
    <h3>This is the Video Page</h3>
  </div>



    <VideoGrids />

</div>

  )
};

export default Video;