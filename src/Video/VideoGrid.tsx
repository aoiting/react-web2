import React, { useState, useEffect } from 'react';
import './video.css';
import Videoexpand from './videoexpand.tsx';

interface Video {
  id: string; // Unique identifier for each video
  url: string; // URL of the video
  videoDescription: string;
  videoLocation: string; // this is the video URL
}

const VideoGrid: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  
  const getAllVideo = async () => {
    try {
      const response = await fetch('/get');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setVideos(res.data.users);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
	getAllVideo();
  }, []);

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="cursor-pointer"
          onClick={() => setSelectedVideo(video)}
        >
          <video
            className="w-full h-auto rounded-lg hover:opacity-80"
            src={video.url}
            controls
          ></video>
        </div>
      ))}
      <Videoexpand
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default VideoGrid;