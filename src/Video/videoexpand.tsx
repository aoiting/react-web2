import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import "./videoexpandcss.css";

// import Video from './VideoGrids.tsx';



interface Video {
  _id: string;
  videoTitle: string;
  videoDescription: string;
  videoLocation: string;
}

interface VideoexpandProps {
  video: Video | null;
  videos: Video[];
  onClose: () => void;
  onSelectVideo: (video: Video) => void;
}

const Videoexpand: React.FC<VideoexpandProps> = ({ video, videos, onClose, onSelectVideo }) => {
  if (!video) return null;

  function extractYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = extractYouTubeId(video.videoLocation);
  if (!videoId) return null;

  useEffect(() => {
    // handler for keydown events
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    // attach event listener when modal opens
    document.addEventListener("keydown", handleKeyDown);

    // cleanup listener when component unmounts or modal closes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
    
      <div className="modal-content">
  <button className="modal-close-btn" onClick={onClose} aria-label="Close video modal">✕</button>

  <div className="video-wrapper">
    <div className="modal-video-container">
      <iframe
        className="modal-iframe"
        src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&vq=hd1080`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={video.videoTitle}
      />
    </div>

    <div className="preview-list">
      {videos.filter(v => v._id !== video._id).map(v => {
        const previewId = extractYouTubeId(v.videoLocation);
        if (!previewId) return null;
        return (
          <div key={v._id} className="preview-item" onClick={() => onSelectVideo(v)}>
            <img
              src={`https://img.youtube.com/vi/${previewId}/mqdefault.jpg`}
              alt={v.videoTitle}
              className="preview-thumbnail"
            />
            <p>{v.videoTitle}</p>
          </div>
        );
      })}
    </div>
  </div>

  <div className="modal-text-container">
    <h2 className="modal-title">{video.videoTitle}</h2>
    <p className="modal-description">{video.videoDescription}</p>
  </div>
</div>



    </div>
  );
};

export default Videoexpand;
