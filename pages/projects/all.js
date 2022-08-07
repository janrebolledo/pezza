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

      <div>all</div>
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
