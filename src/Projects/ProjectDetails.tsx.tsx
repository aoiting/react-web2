
import React from 'react';
import type { Project } from './ProjectList.tsx';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 20 }}>
        ← Back to Projects
      </button>

      <h2>{project.name}</h2>

      <h3>Description</h3>
      <p>{project.description}</p>

      <h3>Type</h3>
      <p>{project.type}</p>

      <h3>Date</h3>
      <p>{project.date}</p>

      <h3>Made by</h3>
      <p>{project.madeBy}</p>

      {project.images && project.images.length > 0 && (
  <div>
    <h3>Images</h3>
    {project.images.map((src, i) => (
      <img key={i} src={src} alt={`${project.name} image ${i + 1}`} style={{ maxWidth: '100%', marginBottom: 10 }} />
    ))}
  </div>
)}

    </div>
  
  );
};

export default ProjectDetails;

