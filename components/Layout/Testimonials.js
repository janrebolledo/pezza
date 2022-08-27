import React from "react";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
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
  return (
    <div className="flex flex-col justify-center items-center gap-12">
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
          <p className="text-white/50 text-sm">
            {testimonial.fields.profession}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
