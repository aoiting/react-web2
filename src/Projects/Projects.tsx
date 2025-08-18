import React, { useState } from 'react';
import './Projects.css';
import Header from '../components/header.tsx';

import ProjectList from './ProjectList.tsx';
import type { Project } from './ProjectList.tsx';
import ProjectDetails from './ProjectDetails.tsx';

const projects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    description: 'This is a description of Project 1.',
    type: 'PC Game',
    date: 'Nov 2024',
    madeBy: 'Unreal Engine',
       images: [
      '/assets/pic1.png',
      '../../assets/pic2.png',
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    description: 'Description for Project 2.',
    type: 'Mobile App',
    date: 'Jan 2025',
    madeBy: 'React Native',
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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <>
      <Header />

      <div className="container-projects">
        <h3>This is the Projects Page</h3>

        {!selectedProject ? (
          <ProjectList projects={projects} onSelect={setSelectedProjectId} />
        ) : (
          <ProjectDetails project={selectedProject} onBack={() => setSelectedProjectId(null)} />
        )}
      </div>
    </>
  );
};

export default Projects;
