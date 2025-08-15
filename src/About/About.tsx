import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import VideoJStest from "../Video/VideoJStest.tsx";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Header from "../components/header.tsx";
import "@fontsource/mitr";
import "@fontsource/mitr/400.css";
import "@fontsource/mitr/500.css";
import "@fontsource/mitr/600.css";
import "@fontsource/mitr/700.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="container-about">
        <div className="aboutme">
          <h2>About Me</h2>
          <p> Hi I am Ting</p>
        </div>


        <div className="education">

          <h2>Education</h2>
          
          <div className="education-row">
            <span className="year">2012 - 2015</span>

            <span className="value">
              <span className="subject">
                Bachelor of Arts with Honours in Computing and Interactive
                Entertainment
                <br></br>
              </span>

              <span className="school">Hong Kong Metropolitan University</span>
            </span>
          </div>

          <br></br>

          <div className="education-row">
            <span className="year">2023 - 2025</span>

            <span className="value">
              <span className="subject">
                Higher Diploma in Multimedia Advertising and Visual Effects
                <br></br>
              </span>

              <span className="school">
                Hong Kong Institute of Vocational Education (Lee Wai Lee)
              </span>
            </span>
          </div>
        </div>

        <div className="skills">
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
        </div>

        <div className="contact-info">
          <h2>Contact</h2>
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:ting@example.com">ting@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
