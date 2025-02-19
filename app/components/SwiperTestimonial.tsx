// components/TestimonialSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rajat Sharma",
    title: "Shimla, Himachal Pradesh",
    message:
      "I recently installed the heat pump water heater from Asha Corporation, and I am thoroughly impressed. The energy savings are remarkable, and it provides hot water consistently, even during cold mornings in Shimla. It’s a must-have for anyone looking to reduce electricity bills without compromising on comfort.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Priya Joshi",
    title: "Pune, Maharashtra",
    message:
      "We chose Asha Corporation's solar water heater for our home in Pune, and it has been a game-changer. The eco-friendly design not only aligns with our values but also ensures we have plenty of hot water every day. The installation was seamless, and their team was very professional.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Anil Mehta",
    title: "Jaipur, Rajasthan",
    message:
      "Living in Jaipur, where gas connections are reliable, the gas-fired water heater from Asha Corporation was the perfect choice. It heats water quickly, is easy to use, and the build quality is excellent. It has made our winters so much more comfortable!",
    image: "/images/testimonial3.jpg",
  },
  {
    name: "Suman Patel",
    title: "Ahmedabad, Gujarat",
    message: "We have been using the electric storage water heater from Asha Corporation for over a year now, and it has exceeded our expectations. It stores enough hot water for our entire family and works flawlessly. A big thumbs-up for the customer support team, who guided us perfectly during the purchase!",
    image: "/images/testimonial2.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex justify-center font-semibold text-4xl text-gray-700 items-center">
        What our Customers Say?
      </div>
      <div className="flex justify-center items-center text-sm text-gray-600">
        take a look at our Customers testimonials
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">
                {testimonial.message}
              </p>
              <h4 className="text-md font-bold text-gray-700 mt-4">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
