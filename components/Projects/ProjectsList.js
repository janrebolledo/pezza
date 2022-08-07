import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsList({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}

export default ProjectsList;
