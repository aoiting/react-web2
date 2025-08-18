// ProjectList.tsx
import React from 'react';

// Export the Project type for reuse
export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  date: string;
  madeBy: string;
 images?: string[]; 
};

interface ProjectListProps {
  projects: Project[];
  onSelect: (projectId: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelect }) => {
  return (
    <div>
      <h2>Choose a Project</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map((project) => (
          <li key={project.id} style={{ margin: '10px 0' }}>
            <button onClick={() => onSelect(project.id)} style={{ cursor: 'pointer' }}>
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
