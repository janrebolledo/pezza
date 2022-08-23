import React, { useState } from "react";
import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";

const metadata = {
  title: "Pezza VFX — Video Editing",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

export default function Projects({ projects }) {
  var videoEditingProjects = projects.filter((project) =>
    project.fields.category?.includes("Video Editing")
  );

  const [filteredProjects, setFilteredProjects] =
    useState(videoEditingProjects);

  function filterProjects(filter) {
    var filtered = projects.filter((project) =>
      project.fields.category?.includes(filter)
    );

    console.log(filtered);

    setFilteredProjects(filtered);
  }

  return (
    <main className="text-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <section className="px-5 pt-48 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-8">
          <h1 className="text-7xl col-span-2">Video Editing</h1>
          <div className="col-span-6 flex overflow-x-auto w-full gap-4">
            <p
              className="bg-bb/50 text-center py-2 px-4 font-bold cursor-pointer flex items-center justify-center whitespace-nowrap"
              onClick={() => setFilteredProjects(videoEditingProjects)}
            >
              ALL
            </p>
            <p
              className="bg-bb/50 text-center py-2 px-4 font-bold cursor-pointer flex items-center justify-center whitespace-nowrap"
              onClick={() => filterProjects("Real Estate")}
            >
              REAL ESTATE
            </p>
            <p
              className="bg-bb/50 text-center py-2 px-4 font-bold cursor-pointer flex items-center justify-center whitespace-nowrap"
              onClick={() => filterProjects("Street Photography")}
            >
              STREET PHOTOGRAPHY
            </p>
          </div>
        </div>
      </section>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-4 bgradient px-5 py-12 min-h-[55vh]">
        {filteredProjects.length > 0 ? (
          <>
            {filteredProjects.map((project, index) => (
              <GridItem project={project} key={index} />
            ))}
          </>
        ) : (
          <p>No projects matched your search.</p>
        )}
      </section>
    </main>
  );
}

function GridItem({ project }) {
  const { slug, title, image } = project.fields;
  return (
    <Link href={"/projects/" + slug}>
      <div className="aspect-square p-12 relative projects-grid-item cursor-pointer group">
        <Image
          src={"https:" + image.fields.file.url}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-50 transition-all"
        />
        <h1 className="text-7xl z-10 absolute top-0 left-0 p-8 w-full h-full flex items-end">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
  };
}
