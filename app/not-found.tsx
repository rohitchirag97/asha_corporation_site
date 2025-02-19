import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SupportSection from "./components/SupportSection";
import Link from "next/link";

import { FaBoxOpen } from "react-icons/fa";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-2 mb-12 px-4 text-center">
        <div className="w-auto">
            <Image src="/404.jpg" alt="Asha 404 Page Image" height={200} width={400} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Uh oh, that page  doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-yellow-400 text-gray-800 px-6 py-3 prodBtn text-lg font-semibold shadow-md hover:bg-yellow-500 hover:scale-105 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
      <SupportSection />
      <Footer />
    </>
  );
};

export default NotFound;
