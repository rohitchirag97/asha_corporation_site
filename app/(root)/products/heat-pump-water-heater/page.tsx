"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const page = () => {
  return (
    <section>
      <div className="pattern">
        <h1 className="text-5xl font-extrabold text-gray-700 px-6 py-8 lg:px-28">
          Heat Pump Water Heater
        </h1>
      </div>
      <Swiper
        navigation
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="w-full"
      >
        <SwiperSlide className="px-8">
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default page;
