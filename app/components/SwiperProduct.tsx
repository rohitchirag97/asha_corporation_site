"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperProduct = () => {
  const products = [
    {
      id: "1",
      name: "Heat Pump Water Heater",
      image: "/prodImg.webp",
      link: "/products/heat-pump",
    },
    {
      id: "2",
      name: "Gas Fired Water Heater",
      image: "/prodImg.webp",
      link: "/products/gas-fired",
    },
    {
      id: "3",
      name: "Glass Tube Solar Water Heater",
      image: "/prodImg.webp",
      link: "/products/glass-tube-solar",
    },
    {
      id: "4",
      name: "Electric Storage Water Heater",
      image: "/prodImg.webp",
      link: "/products/electric-storage",
    },
    {
      id: "5",
      name: "Wood Fired Water Heater",
      image: "/prodImg.webp",
      link: "/products/wood-fired",
    },
    {
      id: "6",
      name: "Chemical Vaporiser",
      image: "/prodImg.webp",
      link: "/products/chemical-vaporiser",
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full px-4 py-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="text-center">
            <Link href={product.link}>
              <Image
                src={product.image}
                height={400}
                width={600}
                alt={`${product.name} Image`}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="mt-4 text-lg font-medium text-gray-700">
                {product.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProduct;
