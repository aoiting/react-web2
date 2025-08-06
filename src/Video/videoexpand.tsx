import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

// import Video from './VideoGrids.tsx';


interface Video {
  _id: string;
  videoTitle: string;
  videoDescription: string;
  videoLocation: string;
}

interface VideoexpandProps {
  video: Video | null;
  onClose: () => void;
}

const Videoexpand: React.FC<VideoexpandProps> = ({ video, onClose }) => {
  if (!video) return null;

   function extractYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

 const videoId = extractYouTubeId(video.videoLocation);
  if (!videoId) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-gray-900 p-4 rounded-lg max-w-4xl w-full">
        <button
          className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
      <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={video.videoTitle}
        />
      </div>
    </div>
  );
};

export default Videoexpand;