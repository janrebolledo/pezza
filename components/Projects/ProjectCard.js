import React from "react";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <Link href="/">
      <div className="border-2 border-solid border-white bg-neutral-900">
        <img src="https://source.unsplash.com/random/1920x1080" />
        <div className="p-4 flex flex-col gap-2">
          <p className="font-bold underline text-sm">PROJECT TAG</p>
          <h2 className="text-3xl">Project Title</h2>
          <p>Project description</p>
          <p className="btns">View Project &rarr;</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
