import React from "react";
import VideoGrids from "./VideoGrids.tsx";
import "./video.css";
import Header from "../components/header.tsx";

function Video() {
  return (
    <div>
      <Header />

      <div className="video-container">
        <div className="video-banner">
          <h3>This is the Video Page</h3>
        </div>

        <VideoGrids />
      </div>
    </div>
  );
}

export default Video;
