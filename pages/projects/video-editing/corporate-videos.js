import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import GridItem from "../../../components/Projects/GridItem";

const metadata = {
  title: "Pezza VFX — Video Editing",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

const filters = [
  { name: "ALL", href: "/projects/video-editing" },
  { name: "REAL ESTATE", href: "/projects/video-editing/real-estate" },
  {
    name: "CORPORATE VIDEOS",
    href: "/projects/video-editing/corporate-videos",
  },
  { name: "YOUTUBE VIDEOS", href: "/projects/video-editing/youtube-videos" },
  {
    name: "SPORTS HIGHLIGHTS",
    href: "/projects/video-editing/sports-highlights",
  },
];

export default function Projects({ projects }) {
  const { asPath } = useRouter();
  const categories = {
    category: "Video Editing",
    subCategory: "Corporate Videos",
  };

  projects = projects.filter((project) =>
    project.fields.category?.includes(categories.category)
  );

  if (categories.subCategory != "") {
    projects = projects.filter((project) =>
      project.fields.subCategories?.includes(categories.subCategory)
    );
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
            {filters.map((filter, index) => (
              <Link href={filter.href} key={index}>
                <p
                  className={
                    asPath === filter.href
                      ? "bg-bb-light/50 text-center py-2 px-4 font-bold cursor-pointer flex items-center justify-center whitespace-nowrap"
                      : "bg-bb/50 text-center py-2 px-4 font-bold cursor-pointer flex items-center justify-center whitespace-nowrap"
                  }
                >
                  {filter.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 projects-grid bgradient px-5 py-12 min-h-[55vh]">
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
