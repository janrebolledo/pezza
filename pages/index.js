import Head from "next/head";
import Link from "next/link";
import { createClient } from "contentful";

import Section from "../public/section.svg";
import ProjectsList from "../components/Projects/ProjectsList";
import Contact from "../components/Layout/Contact";
import Testimonials from "../components/Layout/Testimonials";

const metadata = {
  title: "Pezza VFX",
  description: "CUTTING EDGE PRODUCTION THAT BUILDS BRANDS",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography",
};

export default function Home({ projects, testimonials }) {
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

      <section className="w-full aspect-video relative">
        <div className="w-full aspect-video flex flex-col items-start justify-center px-5">
          <h1 className="text-7xl">
            CUTTING EDGE PRODUCTION THAT BUILDS BRANDS
          </h1>
          <div className="flex flex-row gap-4 z-10">
            <p className="btn">
              <Link href="/">Contact &rarr;</Link>
            </p>
            <p className="btns">
              <Link href="/">Explore Projects &rarr;</Link>
            </p>
          </div>
        </div>
        <video className="w-full aspect-video bg-white/50 absolute top-0">
          <source />
        </video>
      </section>

      <section className="w-full px-5 py-16">
        <h1 className="text-7xl mb-4">FEATURED WORK</h1>
        <ProjectsList projects={projects} />
        <div className="w-full flex justify-center">
          <p className="btn mt-4">
            <Link href="/projects/all">View All &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="relative">
        <img src={Section.src} />
        <div className="absolute top-0 w-full h-full p-5 grid items-center md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-7xl">Services</h1>
            <p>
              Offering a wide range of authentic, engaging experiences for
              brands.
            </p>
            <p className="btnt mt-4">
              <Link href="/projects/all">View All &rarr;</Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-4 text-3xl">
              <span className="material-symbols-outlined">cut</span>VIDEO
              EDITING
            </h2>
            <p>
              Delivering high quality videos. Creating corprate videos to sports
              highlights &amp; theatrical trailers.
            </p>
            <p className="btns">
              <Link href="/projects/video-editing">
                View Video Editing Projects &rarr;
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-4 text-3xl">
              <span className="material-symbols-outlined">videocam</span>
              VIDEOGRAPHY
            </h2>
            <p>
              Videography that engages your audience and builds strength in your
              brand.
            </p>
            <p className="btns">
              <Link href="/projects/videography">
                View Videography Projects &rarr;
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-4 text-3xl">
              <span className="material-symbols-outlined">image</span>
              PHOTOGRAPHY
            </h2>
            <p>Quality photography that builds trust with your clients.</p>
            <p className="btns">
              <Link href="/projects/photography">
                View Photography Projects &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <Contact />
    </main>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "project" });
  const res2 = await client.getEntries({ content_type: "testimonial" });

  return {
    props: {
      projects: res.items,
      testimonials: res2.items,
    },
  };
}
