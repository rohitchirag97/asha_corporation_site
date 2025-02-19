"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

interface Testimonial {
  img: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

export default function FancyTestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-16 mx-auto text-center">
      <div className="bg-yellow-400 mb-12 w-auto px-6 py-3 text-lg text-gray-700 flex gap-4 items-center font-bold prodBtn">
        What Our Customers Say?
      </div>
    </div>
  );
}
