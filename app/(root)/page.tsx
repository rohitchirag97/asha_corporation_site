import Image from "next/image";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import HomeAbout from "../components/HomeAbout";
import TestimonialSlider from "../components/SwiperTestimonial";
import GetQuote from "../components/GetQuote";

import SupportSection from "../components/SupportSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <ProductsSection />
      <HomeAbout />
      <TestimonialSlider />
      <GetQuote />
    </section>
  );
}
