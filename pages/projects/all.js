import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";

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
          <div className="col-span-6 gap-4 grid grid-cols-4">
            {projects.map((project, index) => (
              <GridItem project={project} key={index} />
            ))}
          </div>
        </div>
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
