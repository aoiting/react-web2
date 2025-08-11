import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import VideoJStest from "../Video/VideoJStest.tsx";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Header from "../components/header.tsx";

const About: React.FC = () => {

  return (
    <div>
      <Header />

      <div className="container-design">
        <h3>About Me</h3>

        <div>
       
       
        </div>
      </div>
    </div>
  );
};

export default About;
