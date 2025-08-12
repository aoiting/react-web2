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

      <div className="container-about">

        <div className="aboutme">
          <h2>About Me</h2>
          <p> Hi I am Ting</p>
        </div>

<div className="about-content">
        <h2>Education</h2>
     <span className="year">2012</span><span className="value">XXXXX</span> <br></br>
<span className="year">2013</span><span className="value">YYYYY</span>


        <h2>Skills</h2>

        <div className="skill-flexbox">
          <div className="skill-item">
            <h4>Design</h4>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>Lightroom</p>
            <p>Adobe XD</p>
          </div>
          <div className="skill-item">
            <h4>Video</h4>
            <p>Premier Pro</p>
            <p>After Effects</p>
          </div>
          <div className="skill-item">
            <h4>Game / App</h4>
            <p>Unity</p>
            <p>Unreal Engine</p>
            <p>Blender</p>
            <p>Android Studio</p>
          </div>
          <div className="skill-item">
            <h4>Coding</h4>
            <p>Java</p>
            <p>HTML</p>
            <p>JavaScript</p>
            <p>C#</p>
          </div>
        </div>

        <h2> Contact </h2>
        <div className="contact-info">
          <p>ting@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
