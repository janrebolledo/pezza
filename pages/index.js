import Head from "next/head";
import Link from "next/link";
import ProjectCard from "../components/Projects/ProjectCard";

const metadata = {
  title: "PLACOSON",
  description:
    "PLACOSON – AN ENTERTAINMENT, CREATIVE PRODUCTION STUDIO, &amp; STREETWEAR BRAND.",
  keywords:
    "placoson, placoson llc, placoson clothing, placoson production, desvo filmz",
};

export default function Home() {
  return (
    <main className="bg-neutral-900 text-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <section className="max-h-screen">
        <div className="absolute w-full aspect-video flex flex-col items-start justify-center">
          <h1>CUTTING EDGE PRODUCTION THAT BUILDS BRANDS</h1>
          <p className="btn">
            <Link href="/">Contact &rarr;</Link>
          </p>
        </div>
        <video className="w-full aspect-video bg-white/50">
          <source />
        </video>
      </section>

      <section className="w-full grid grid-cols-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
}
