import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import ProjectGrid from "../../../components/Projects/ProjectGrid";

const metadata = {
  title: "Pezza VFX — Photography",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

const filters = [
  { name: "ALL", href: "/projects/photography" },
  { name: "REAL ESTATE", href: "/projects/photography/real-estate" },
  { name: "DRONE", href: "/projects/photography/drone" },
  {
    name: "STREET PHOTOGRAPHY",
    href: "/projects/photography/street-photography",
  },
];

export default function Projects({ projects }) {
  const { asPath } = useRouter();
  const categories = { category: "Photography", subCategory: "Real Estate" };

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
        <div className="flex flex-col gap-4 lg:flex-row justify-between">
          <h1 className="text-5xl">Photography</h1>
          <div className="flex overflow-x-auto w-full lg:w-max gap-4">
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
      <ProjectGrid projects={projects} />
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
