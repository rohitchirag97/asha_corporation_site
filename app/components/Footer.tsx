import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#111827] text-white justify-between lg:px-28 px-2">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center py-8 space-y-4">
        <div className="lg:w-1/4 w-full flex flex-col space-y-3">
          <Image
            src="/asha-logo-white.png"
            width={150}
            height={90}
            alt="Asha Corporation Logo"
          />
          <p className="font-extralight text-sm text-gray-300">
            Established in 1998 by the visionary Mr. Muljibhai, Asha Corporation
            has been at the forefront of revolutionizing hot water solutions.
          </p>
        </div>
        <div className="hidden lg:flex flex-col space-y-4">
          <span className="uppercase">Company</span>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/about-us" className="flex gap-2  items-center">
              <FaChevronRight /> About Us
            </Link>
            <Link href="/certificates" className="flex gap-2 items-center">
              <FaChevronRight /> Certificates
            </Link>
            <Link href="/blogs" className="flex gap-2 items-center">
              <FaChevronRight /> Blogs
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="uppercase">Products</span>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/h8eat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Heat Pump
            </Link>
            <Link
              href="/gas-fired-water-heater"
              className="flex gap-2 items-center"
            >
              <FaChevronRight /> Gas Fired Water Heater
            </Link>
            <Link href="/heat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Glass Tube Solar Water Heater
            </Link>
            <Link href="/heat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Flat Plate Solar Water Heater
            </Link>
            <Link href="/heat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Electric Storage Water Heater
            </Link>
            <Link href="/heat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Wood Fired Water Heater
            </Link>
            <Link href="/heat-pump" className="flex gap-2 items-center">
              <FaChevronRight /> Chemical Vaporiser
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-col space-y-4">
          <span className="uppercase">Contact Us</span>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="tel: +91 9825341494" className="flex gap-2 items-center">
              <MdCall /> +91 9825341494
            </Link>
            <Link href="mailto:ashacorporation22@gmail.com" className="flex gap-2 items-center">
              <MdAlternateEmail /> ashacorporation22@gmail.com
            </Link>
            <Link
              href="https://www.google.com/maps/dir/22.540234,72.930074/asha+corporation+google+map+link/@22.5430626,72.9207306,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e4ddddb93ea45:0xdeb60447879b858f!2m2!1d72.9243465!2d22.5420975?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              className="flex gap-2 items-center"
            >
              <MdOutlinePersonPinCircle /> Plot No, 8, Phase -2, <br />
              B/H Professor Soc.,
              <br />
              Near Karamsad Overbridge, <br /> G.I.D.C, V.U.Nagar - 388120{" "}
              <br /> Anand - Gujarat (India)
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center border-t border-t-gray-800 text-gray-500 py-4">
        <span className="text-white">
          With <span className="text-red-700">♥</span> Made in India, &copy;
          1998-2025 Asha Corporation. All Rights Reserved.
        </span>
        <div className="flex gap-3 text-2xl">
          <Link
            href="https://api.whatsapp.com/send?phone=9825341494&text=Tell%20Me%20More%20About%20Your%20Hot%20Water%20Products"
            className="hover:text-white"
            aria-label="Whatsapp Link"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.facebook.com/share/1Bpsquzk1g/?mibextid=qi2Omg"
            className="hover:text-white"
            aria-label="Facebook Link"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            href="https://www.instagram.com/ashacorporation/profilecard/?igsh=aXplcmFvdjF3bnFu"
            className="hover:text-white"
            aria-label="Instagram Link"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com/@ashacorporation19"
            className="hover:text-white"
            aria-label="Youtube Link"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
