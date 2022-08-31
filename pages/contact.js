import React from "react";
import Head from "next/head";
import { createClient } from "contentful";

import Contact from "../components/Layout/Contact";

const metadata = {
  title: "Pezza VFX — Contact",
  description: "Contact Pezza VFX.",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography",
};

function Contact({ copy }) {
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

      <Contact />
    </main>
  );
}

export default about;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntry("3YyunYoPT2MlpeAMRT6w0F");

  return {
    props: {
      copy: res.fields,
    },
  };
}
