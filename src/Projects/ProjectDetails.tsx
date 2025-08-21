//ProjectDetails.tsx
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import "videojs-youtube";

// Define the Project type
export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  date: string;
  madeBy: string;
  images?: string[];
  videos?: string[];
};

interface ProjectDetailsProps {
  projects: Project[];
}

// Inline VideoPlayer component
const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const playerRef = useRef<videojs.Player | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
        fluid: true,
        sources: [{ src, type: "video/youtube" }],
        youtube: {
          modestbranding: 1,
          rel: 0,
        },
      });

      return () => {
        if (playerRef.current && !playerRef.current.isDisposed()) {
          playerRef.current.dispose();
        }
      };
    }
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId) || null;
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (!selectedProject) {
    // Show project list only when no project is selected
    return (
      <div className="project-mainpage">
        <h4>Choose a Project</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {projects.map((project) => (
            <li key={project.id} style={{ margin: "10px 0" }}>
              <button
                onClick={() => handleSelect(project.id)}
                style={{ cursor: "pointer" }}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Show project details when a project is selected
  return (
    <div className="project-details-container">
      <div className="button-container">
        <button onClick={handleBack}>← Back to Projects</button>
      </div>

      <div className="project-details">
        <div className="project-details-left">
          <h2>{selectedProject.name}</h2>

          <h3>Type</h3>
          <p>{selectedProject.type}</p>

          <h3>Date</h3>
          <p>{selectedProject.date}</p>

          <h3>Made by</h3>
          <p>{selectedProject.madeBy}</p>
        </div>

        <div className="project-details-right">
          <p>{selectedProject.description}</p>
        </div>
      </div>

      <div className="project-preview">
        {selectedProject.images && selectedProject.images.length > 0 && (
          <div className="project-images">
            {selectedProject.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${selectedProject.name} image ${i + 1}`}
                style={{ maxWidth: "100%", marginBottom: 10 }}
              />
            ))}
          </div>
        )}


  
        {selectedProject.videos && selectedProject.videos.length > 0 && (
  <div className="project-videos">
    {selectedProject.videos.map((videoUrl, i) => (
      <div key={i} style={{ marginBottom: "20px" }}>
        <iframe
          width="100%"
          height="360"
          src={videoUrl.replace("watch?v=", "embed/")} // Convert to embed URL
          title={`YouTube video ${i + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>
)}

      </div>
    </div>
  );
};

export default ProjectDetails;

