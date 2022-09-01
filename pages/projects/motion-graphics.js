import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import GridItem from "../../components/Projects/GridItem";

const metadata = {
  title: "Pezza VFX — Motion Design",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

export default function Projects({ projects }) {
  projects = projects.filter((project) =>
    project.fields.category?.includes("Motion Graphics")
  );

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
        <h1 className="text-7xl">Motion Graphics</h1>
      </section>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-4 bgradient px-5 py-12 min-h-[55vh]">
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
    </main>
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
