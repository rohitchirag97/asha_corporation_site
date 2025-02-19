"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheck } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const slides = [
    {
      smallLine: "Advanced Heating Technology for Modern Homes",
      mainLine: "Heat Pump Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "24 / 7 / 365 Days Running Hot Water",
        "Minimum Electricity Consumption",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/heat-pump-water-heater",
    },
    {
      smallLine: "Advanced Heating Technology for Modern Home",
      mainLine: "Gas Fired Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "24 / 7 / 365 Days Running Hot Water",
        "Minimum Gas Consumption",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/flat-plate-solar-water-heater",
    },
    {
      smallLine: "Perfect Hot Water Solutions for Your Every Need",
      mainLine: "Glass Tube Solar Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "Eco-Friendly and Sustainable",
        "Zero Electricity Usage",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/glass-tube-solar-water-heater",
    },
    {
      smallLine: "Copper enriched Hot Water for Your Home",
      mainLine: "Flat Plate Solar Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "Eco-Friendly and Sustainable",
        "Zero Electricity Usage",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/flat-plate-solar-water-heater",
    },
    {
      smallLine: "Copper enriched Hot Water for Your Home",
      mainLine: "Electric Storage Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "24 / 7 / 365 Days Running Hot Water",
        "Minimum Electricity Consumption",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/flat-plate-solar-water-heater",
    },
    {
      smallLine: "Copper enriched Hot Water for Your Home",
      mainLine: "Wood Fired Water Heater",
      prodImg: "prodgrp.webp",
      features: [
        "24 / 7 / 365 Days Running Hot Water",
        "Minimum Electricity Consumption",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/flat-plate-solar-water-heater",
    },
    {
      smallLine: "Copper enriched Hot Water for Your Home",
      mainLine: "Chemical Vaporiser",
      prodImg: "prodgrp.webp",
      features: [
        "24 / 7 / 365 Days Running Hot Water",
        "Minimum Electricity Consumption",
        "1-Year Manufacturing Warranty",
      ],
      ctaLink: "/products/flat-plate-solar-water-heater",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="px-8">
          <div className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-between items-center gap-8 p-4 mb-8 lg:mb-0 lg:p-8">
            <div className="lg:w-3/4 w-full flex flex-col space-y-4">
              <div>
                <p className="text-xs lg:text-sm font-light text-gray-700">
                  {slide.smallLine}
                </p>
                <h1 className="text-3xl lg:text-7xl font-extrabold text-gray-800">
                  {slide.mainLine}
                </h1>
              </div>
              <div className="flex text-sm lg:text-lg flex-col space-y-3">
                {slide.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <FaCheck className="text-green-500" /> {feature}
                  </span>
                ))}
              </div>
              <div className="py-4">
                <Link
                  href={slide.ctaLink}
                  className="bg-yellow-400 hover:bg-yellow-500 transition-all w-fit px-6 py-4 flex items-center gap-4 font-bold text-gray-900 rounded shadow prodBtn"
                  aria-label={`View details about ${slide.mainLine}`}
                >
                  <span>View More Details</span>
                  <MdArrowRightAlt size={24} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src={`/${slide.prodImg}`}
                height={450}
                width={450}
                alt={`${slide.mainLine} Image`}
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
