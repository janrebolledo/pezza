import React from "react";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Layout/Contact";

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
      "Delivering high quality videos. Creating corprate videos to sports highlights & theatrical trailers..",
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

function portfolio() {
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

      <section className="px-5">
        <h1 className="text-7xl">Recent Clients</h1>
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

export default portfolio;
