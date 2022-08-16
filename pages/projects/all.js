import React from "react";
import Head from "next/head";
import { createClient } from "contentful";

const metadata = {
  title: "Pezza VFX — Portfolio",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

export default function all({ projects }) {
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

      <section className="px-5 pt-48 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-7xl col-span-2">All Projects</h1>
          <div className="col-span-6 grid grid-cols-6"></div>
        </div>
      </section>
    </main>
  );
}

function GridItem({ project }) {
  return (
    <div>
      <h1>Project Title</h1>
    </div>
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
