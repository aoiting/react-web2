import React, { useState, useEffect } from "react";
//import { Video } from './video';
import "./video.css";
import Videoexpand from "./videoexpand.tsx";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import VideoJS from "../Video/VideoJS.tsx";

export interface Video {
  _id: string;
  videoTitle: string;
  videoDescription: string;
  videoLocation: string;
}

// Helper function to extract YouTube video ID from various URL formats
function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const VideoGrids: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const getAllVideos = async () => {
    try {
      const response = await fetch("https://backend-production-0d61.up.railway.app/portfolio/Video");
      const textData = await response.text();
      try {
        const data = JSON.parse(textData);
        setVideos(data);
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        console.log("Response text was:", textData);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <div className="video-grid">
      {videos.map((video) => {
        const videoId = extractYouTubeId(video.videoLocation);
        if (!videoId) return null; // skip invalid URLs or non-YouTube videos

        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        return (
          <div
            key={video._id}
            className="video-item"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={thumbnailUrl}
              alt={video.videoTitle}
              className="video-thumbnail"
              style={{ cursor: "pointer" }}
            />
            <VideoJS videoId={videoId} />
            <h4>{video.videoTitle}</h4>
            <p className="video-description">{video.videoDescription}</p>{" "}
            {/* Add this line */}
          </div>
        );
      })}

   <Videoexpand
  video={selectedVideo}
  videos={videos}             // pass all videos here
  onClose={() => setSelectedVideo(null)}
  onSelectVideo={(video) => setSelectedVideo(video)}  // handler to select different video
/>

    </div>
  );
};

export default VideoGrids;

/* test front end 

const [videos, setVideos] = useState<Video[]>(mockVideos);


  const getAllVideos = async () => {
const mockVideos: Video[] = [
  {
    _id: '1',
    videoTitle: 'Sample Video 1',
    videoDescription: 'Description of sample video 1',
    videoLocation: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    _id: '2',
    videoTitle: 'Sample Video 2',
    videoDescription: 'Description of sample video 2',
    videoLocation: 'https://www.w3schools.com/html/movie.mp4',
  },
  // Add more mock videos as needed
];
}

*/

/*
    try {
      const response = await fetch('http://localhost:5173/portfolio/video'); // Ensure this matches your backend API route
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setVideos(data); // Assuming backend returns array of video objects directly
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  */

/*

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


*/
