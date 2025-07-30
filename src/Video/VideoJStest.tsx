import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

const VideoJStest = ({ videoId }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        techOrder: ['youtube'],
        sources: [{
          type: 'youtube',
          src: `https://www.youtube.com/watch?v=75qBYnXB4r8`
        }],
        youtube: {
          iv_load_policy: 3 // optional YouTube player parameters
        },
        controls: true,
        autoplay: false,
        preload: 'auto'
      });
    } else {
      // Update the source if videoId changes
      playerRef.current.src({ type: 'youtube', src: `https://www.youtube.com/watch?v=75qBYnXB4r8` });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoId]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
};




export default VideoJStest;