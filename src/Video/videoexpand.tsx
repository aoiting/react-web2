import React from 'react';

interface Video {
  id: string;
  url: string;
}

interface VideoexpandProps {
  video: Video | null;
  onClose: () => void;
}

const Videoexpand: React.FC<VideoexpandProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-gray-900 p-4 rounded-lg max-w-4xl w-full">
        <button
          className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <video
          className="w-full h-auto rounded-lg"
          controls
          autoPlay
          src={video.url}
        ></video>
      </div>
    </div>
  );
};

export default Videoexpand;