import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project }) {
  const { title, slug, description, category, image } = project.fields;

  return (
    <Link href={`/projects/` + slug}>
      <div className="border-2 border-solid border-white bg-neutral-900">
        <div className="relative w-full aspect-video">
          {image && (
            <Image
              src={"https:" + image.fields.file.url}
              alt={image.fields.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="p-4 flex flex-col gap-2 text-xs">
          <p className="font-bold underline text-sm uppercase">{category[0]}</p>
          <h2 className="text-3xl">{title}</h2>
          <p className="text-sm">{description}</p>
          <p className="btns">View Project &rarr;</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
