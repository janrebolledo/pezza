import React from "react";
import GridItem from "./GridItem";

function ProjectGrid({ projects }) {
  return (
    <section className="grid grid-cols-1 2xl:grid-cols-4 gap-4 projects-grid bgradient px-5 py-12">
      {projects.length > 0 ? (
        <>
          {projects.map((project, index) => (
            <GridItem project={project} key={index} />
          ))}
        </>
      ) : (
        <p>No projects matched your search.</p>
      )}
    </section>
  );
}

export default ProjectGrid;
