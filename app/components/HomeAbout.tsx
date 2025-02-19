import Image from "next/image";
import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";

const HomeAbout = () => {
  return (
    <section className="pattern items-center flex justify-center lg:justify-between lg:gap-4 px-2 lg:px-28 lg:py-8 py-6">
      <div className="hidden lg:flex">
        <Image
          src="/about-asha-corporation.webp"
          width={650}
          height={650}
          alt="About Asha Corporation"
        />
      </div>
      <div className="lg:w-3/4 w-full">
        <div className="mb-3">
          <span className="text-sm text-yellow-800 font-bold">About Asha Corporation</span>
          <h1 className="lg:text-4xl text-2xl font-extrabold">
            India's Leading Hot Water Products Manufacturer
          </h1>
        </div>
        <div className="flex justify-center items-center lg:items-start flex-col space-y-3 text-gray-600">
          <p className="text-sm font-extralight">
            Established in 1998 by the visionary{" "}
            <span className="font-semibold">Mr. Muljibhai</span>,
            <span className="font-semibold">Asha Corporation</span>
            has been at the forefront of revolutionizing hot water solutions.
            With a focus on sustainability, we specialize in manufacturing a
            wide range of innovative products, including{" "}
            <span className="font-semibold">
              Solar Water Heaters, Gas Fired Water Heaters, Heat Pumps, and Wood
              Fired Water Heaters
            </span>
            .
          </p>
          <p className="text-sm font-extralight hidden lg:block">
            Driven by our mission to transition households and industries from
            non-renewable to renewable sources of hot water, we are proud to be
            a trusted partner for over{" "}
            <span className="font-semibold">6,000 happy customers</span>. Over
            the past <span className="font-semibold">30+ years</span>,{" "}
            <span className="font-semibold">Asha Corporation</span> has
            consistently delivered eco-friendly and efficient solutions that
            meet the diverse needs of both residential and industrial clients.
          </p>
          <p className="text-sm font-extralight hidden lg:block">
            Our commitment to innovation and excellence ensures that our
            products are not only environmentally responsible but also reliable
            and cost-effective. By harnessing renewable energy sources like
            solar power and energy-efficient technologies, we help our customers
            reduce their carbon footprint while enjoying the benefits of
            sustainable hot water solutions.
          </p>
          <p className="text-sm font-extralight">
            At <span className="font-semibold">Asha Corporation</span>, we
            believe in creating a greener future. Every product we manufacture
            is a step toward achieving our goal of replacing dependency on
            non-renewable resources with renewable, sustainable alternatives.
          </p>
          <p className="text-sm font-extralight">
            Thank you for choosing{" "}
            <span className="font-semibold">Asha Corporation</span>—together, we
            are making a difference, one hot water solution at a time.
          </p>
          <Link
            href="/about"
            className="flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 transition-all w-fit px-6 py-4 font-bold text-sm text-gray-900 rounded shadow prodBtn"
          >
            Learn More About Asha <MdArrowRightAlt />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
