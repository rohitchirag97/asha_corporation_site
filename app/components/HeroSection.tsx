import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

import SwiperComponent from "./SwiperComponent";

const HeroSection = () => {
  return (
    <div className="pattern lg:px-12 lg:py-4 w-full flex justify-between items-center">
      <SwiperComponent />
    </div>
  );
};

export default HeroSection;
