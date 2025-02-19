import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import HomeAbout from "../../components/HomeAbout";
import GetQuote from "../../components/GetQuote";

import SupportSection from "../../components/SupportSection";

export default function Home() {
  return (
    <section>
      <div className="lg:px-12 lg:py-4 w-full h-48 bg-blue-800/90 flex justify-center items-center py-12">
        <h1 className="bg-white text-gray-700 text-5xl font-extrabold uppercase py-3 px-6 border border-foreground">
          About Asha Corporation
        </h1>
      </div>
      <HomeAbout />
      <GetQuote />
    </section>
  );
}
