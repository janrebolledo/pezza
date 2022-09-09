import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Testimonials({ testimonials }) {
  return (
    <section className="px-5 py-12">
      <h1 className="text-5xl md:text-7xl w-full text-center mb-12 shape rect-l">
        Testimonials
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function TestimonialSlide({ testimonial }) {
  const link = testimonial.fields.link || "";

  let props = {
    target: "_blank",
  };

  if (link.includes("pezzavfx.com")) {
    props.target = "_self";
  }
  return (
    <a href={link || ""} {...props}>
      <div className="flex flex-col justify-center items-center gap-12 py-12 cursor-pointer">
        <p className="text-xl md:text-3xl font-bold px-[20%] text-center">
          &quot;{testimonial.fields.testimonial}&quot;
        </p>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={"https:" + testimonial.fields.image.fields.file.url}
            width={64}
            height={64}
            className="rounded-full"
            alt=""
          />
          <div className="h-full flex flex-col">
            <h4 className="text-xl">{testimonial.fields.name}</h4>
            <p className="text-sm">{testimonial.fields.profession}</p>
            <p className="text-white/50 text-sm">{testimonial.fields.stat}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Testimonials;
