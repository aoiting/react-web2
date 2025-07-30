import React from 'react';
import VideoGrids from './VideoGrids.tsx';
import './video.css';


function Video(){
  return (

<div>
  <div className='video-banner'>
    <h3>This is the Video Page</h3>
  </div>

<div className='video-grid'>



    <VideoGrids />
</div>

</div>

  )
};

export default Video;