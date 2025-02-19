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

const ProductsSection = () => {
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
    <section className="flex flex-col justify-center items-center px-4 lg:px-28 py-16 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-8 space-y-4">
        <h2 className="bg-yellow-400 inline-block px-6 py-3 text-3xl font-extrabold text-gray-700 prodBtn">
          Our Products
        </h2>
        <p className="font-light text-gray-500 max-w-3xl mx-auto">
          Choose a hot water product from our wide range of products according
          to your needs.
        </p>
      </div>
      {/* Mobile Product Slider Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="w-full px-4 py-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="text-center">
            <Image
              src={product.image}
              height={300}
              width={600}
              alt={`${product.name} Image`}
              className="mx-auto rounded-lg shadow-md"
            />
            <div className="flex flex-col">
              <span className="mt-4 text-lg font-medium text-gray-700">
                {product.name}
              </span>
              <Link
                href={`${product.link}`}
                className="px-0 w-40 rounded-lg self-center py-1 bg-red-700 text-white"
              >
                Read More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsSection;
