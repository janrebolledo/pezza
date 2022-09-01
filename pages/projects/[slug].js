import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "project" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  return {
    props: { project: items[0] },
  };
}

const Bold = ({ children }) => <p className="bold">{children}</p>;

const Heading = ({ children }) => <h1 className="text-7xl">{children}</h1>;

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
  },
};

function ProjectPage({ project }) {
  const { title, image, date, content, excerpt, videoEmbed } = project.fields;

  if (videoEmbed != undefined)
    return (
      <main className="text-white">
        <Head>
          <title>{"Pezza VFX — " + title}</title>
          <meta name="description" content={excerpt} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={"Pezza VFX — " + title} />
          <meta property="og:description" content={excerpt} />
          <meta
            property="og:image"
            content={"https:" + image.fields.file.url}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content={"https:" + image.fields.file.url}
          />
        </Head>

        <section className="p-5 pt-[15vh] h-full bgradient">
          <div className="flex flex-row justify-between items-center my-8">
            <h1 className="text-7xl">{title} - CLIENT OVERVIEW</h1>
            <p>{date}</p>
          </div>

          <section className="pb-8">
            {documentToReactComponents(content, options)}
          </section>

          <div
            dangerouslySetInnerHTML={{ __html: videoEmbed }}
            className="videoEmbed"
          />

          <p className="btns mt-8">
            <Link href="/">&larr; RETURN HOME</Link>
          </p>
        </section>
      </main>
    );
  else
    return (
      <main className="text-white">
        <Head>
          <title>{"Pezza VFX — " + title}</title>
          <meta name="description" content={excerpt} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={"Pezza VFX — " + title} />
          <meta property="og:description" content={excerpt} />
          <meta
            property="og:image"
            content={"https:" + image.fields.file.url}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content={"https:" + image.fields.file.url}
          />
        </Head>

        <section className="p-5 pt-[15vh] h-full bgradient">
          <div className="flex flex-row justify-between items-center my-8">
            <h1 className="text-7xl">{title} - CLIENT OVERVIEW</h1>
            <p>{date}</p>
          </div>
          {image && (
            <img src={image.fields.file.url} alt={image.fields.title} />
          )}
        </section>

        <section className="px-5 pt-8">
          {documentToReactComponents(content, options)}
        </section>
        <p className="px-5 pt-8">
          <Link href="/">&larr; RETURN HOME</Link>
        </p>
      </main>
    );
}

export default ProjectPage;
