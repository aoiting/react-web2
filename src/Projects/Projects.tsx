//Projects.tsx
import React, { useState } from 'react';
import './Projects.css';
import Header from '../components/header.tsx';

import ProjectDetails from './ProjectDetails';


import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";

// Define the Project type
type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  date: string;
  madeBy: string;
  images?: string[];
  videos?: string[];
};

const projects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    description: 'This is a description of Project 1.',
    type: 'PC Game',
    date: 'Nov 2024',
    madeBy: 'Unreal Engine',
   images: [pic1, pic2],
    videos: [
      'https://www.youtube.com/watch?v=75qBYnXB4r8',
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    description: 'Description for Project 2.',
    type: 'Mobile App',
    date: 'Jan 2025',
    madeBy: 'React Native',
        videos: [
      'https://www.youtube.com/watch?v=OA3NygSyaKQ',
    ],
  },
  {
    id: '3',
    name: 'Project 3',
    description: 'Description for Project 3.',
    type: 'Web Application',
    date: 'Mar 2025',
    madeBy: 'Next.js',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {

  return (
    <>
      <Header />

      <div className="container-projects">
    

   <ProjectDetails projects={projects} />

      </div>
    </>
  );
};

export default Projects;
