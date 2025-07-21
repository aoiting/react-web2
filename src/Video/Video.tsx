import React from 'react';
import VideoGrid from './VideoGrid.tsx';
import './video.css';


function Video(){
  return (

<div>
  <div className='video-banner'>
    <h3>This is the Video Page</h3>
  </div>

<div className='video-grid'>
  <VideoGrid />
</div>

</div>

  )
};

export default Video;