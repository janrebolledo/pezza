import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Contact from "../components/Layout/Contact";
import { createClient } from "contentful";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const metadata = {
  title: "Pezza VFX — Portfolio",
  description: "Pezza VFX's portfolio",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography, pezza vfx portfolio",
};

const categories = [
  {
    name: "Video Editing",
    description:
      "Delivering high quality videos. Creating corprate videos to sports highlights & theatrical trailers.",
    link: "/projects/video-editing",
  },
  {
    name: "Videography",
    description:
      "Videography that engages your audience and builds strength in your brand.",
    link: "/projects/videography",
  },
  {
    name: "Photography",
    description: "Quality photography that builds trust with your clients.",
    link: "/projects/photography",
  },
  {
    name: "Social Media Management",
    description: "Content strategy that builds communities.",
    link: "/projects/social-media-management",
  },
  {
    name: "Motion Graphics",
    description: "Premium motion graphics that grab your audience's attention.",
    link: "/projects/motion-design",
  },
];

export default function portfolio({ clients }) {
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
      <section className="pt-[15vh]">
        <h1 className="text-center text-white text-7xl my-8">Portfolio</h1>
        <Swiper
          spaceBetween={32}
          slidesPerView={1.5}
          navigation
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategorySlide category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="px-5 py-16">
        <h1 className="text-7xl mb-8">Recent Clients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
          {clients.map((client, index) => (
            <Client client={client} key={index} />
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}

function CategorySlide({ category }) {
  const { name, description, link } = category;
  return (
    <div className="relative w-full">
      <div className="p-5 absolute top-0 h-full w-full justify-end flex flex-col gap-4">
        <h1 className="text-5xl">{name}</h1>
        <p>{description}</p>
        <Link href={link}>
          <p className="btn">View {name} Projects &rarr;</p>
        </Link>
      </div>
      <img className="w-full h-[492px] bg-white/50" />
    </div>
  );
}

function Client({ client }) {
  const { name, projectLink } = client.fields;
  const { file, title } = client.fields.picture.fields;

  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <Image
        src={"https:" + file.url}
        alt={title}
        width={124}
        height={124}
        className="rounded-full"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">{name}</h3>
        <p className="btn">
          <Link href={"/projects/" + projectLink.fields.slug}>
            View Project &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "client" });

  return {
    props: {
      clients: res.items,
    },
  };
}
