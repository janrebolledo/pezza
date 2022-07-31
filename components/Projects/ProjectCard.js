import React from "react";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <Link href="/">
      <div className="border border-solid border-white">
        <img src="https://source.unsplash.com/random/1920x1080" />
        <h2>Project Title</h2>
        <p>Project description</p>
        <p>View Project &rarr;</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
