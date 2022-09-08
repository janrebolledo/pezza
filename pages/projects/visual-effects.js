import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const metadata = {
  title: "Pezza VFX — Visual Effects",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

export default function Projects({ projects }) {
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
        <h1 className="text-7xl">Visual Effects</h1>
      </section>
      <VisualEffectsGrid projects={projects} />
    </main>
  );
}

function VisualEffectsGrid({ projects }) {
  return (
    <section className="bgradient px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen">
      {projects.map((project, index) => (
        <VisualEffectsProject project={project} key={index} />
      ))}
    </section>
  );
}

function VisualEffectsProject({ project }) {
  const { title, image1, image2 } = project.fields;

  return (
    <div>
      <h2 className="text-4xl">{title}</h2>
      <ReactCompareSlider
        className="aspect-video"
        itemOne={
          <ReactCompareSliderImage
            alt={image1.fields.title}
            src={"https:" + image1.fields.file.url}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            alt={image2.fields.title}
            src={"https:" + image2.fields.file.url}
          />
        }
      />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "motionGraphicsProject",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}
