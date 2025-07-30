import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import PlayerOptions from 'video.js/dist/types/player';
import './video.css';

interface VideotestProps {
  options: PlayerOptions;
  onReady?: (player: Player) => void;
}

const Videotest: React.FC<VideotestProps> = ({ options, onReady }) => {
  const playerRef = useRef<Player | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize Video.js player only once
    if (!playerRef.current) {
      // Create video-js element and attach it to the container
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);
      }

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        if (onReady) {
          onReady(player);
        }
      });
    } else {
      // Update player source and autoplay if options change
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  useEffect(() => {
    const player = playerRef.current;
    // Cleanup on unmount
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default Videotest;