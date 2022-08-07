import React from "react";
import Head from "next/link";

const metadata = {
  title: "Pezza VFX — Portfolio",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

function portfolio() {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <div>portfolio</div>
    </main>
  );
}

export default portfolio;
