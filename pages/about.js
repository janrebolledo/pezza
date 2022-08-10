import React from "react";
import Head from "next/head";

const metadata = {
  title: "Pezza VFX — About",
  description: "About Pezza VFX, skills, workflow & more.",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography",
};

function about() {
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

      <section className="px-5 pt-48 bgradient grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl">About Me</h1>
          <p>
            I&apos;m Perry and I currently study Film &amp; Television at Bond
            University after finding my passion in video editing. I started
            editing videos 6 years ago for my own YouTube channel before I
            discovered I could do it for clients as my job. So, I started my
            business in January 2022 and since then, I&apos;ve been fully
            focused on improving my skillset. The videos I&apos;ve edited for
            YouTube have accumulated a combined view count of over 20 million
            with 12.5 million (spread across 510 videos) of those views coming
            from 2021 alone. More recently, I&apos;ve had the opportunity to
            work on movie trailers, TV shows, corporate videos, and sporting
            highlight videos.
          </p>
        </div>
      </section>
    </main>
  );
}

export default about;
