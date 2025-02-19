"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";

import { FaChevronDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

interface NavSubLink {
  link: string;
  name: string;
}

interface NavMenuItem {
  link: string;
  name: string;
  icon?: ReactNode;
  subLinks?: NavSubLink[];
}

const NavBar = () => {
  const NavMenu: NavMenuItem[] = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    {
      link: "/products",
      name: "Products",
      icon: <FaChevronDown className="inline-block ml-1" />,
      subLinks: [
        {
          link: "/products/heat-pump-water-heater",
          name: "Heat Pump Water Heater",
        },
        {
          link: "/products/gas-fired-water-heater",
          name: "Gas Fired Water Heater",
        },
        {
          link: "/products/glass-tube-solar-water-heater",
          name: "Glass Tube Solar Water Heater",
        },
        {
          link: "/products/flat-plate-solar-water-heater",
          name: "Flat Plate Solar Water Heater",
        },
        {
          link: "/products/electric-storage-water-heater",
          name: "Electric Storage Water Heater",
        },
        {
          link: "/products/wood-fired-water-heater",
          name: "Wood Fired Water Heater",
        },
        { link: "/products/chemical-vaporiser", name: "Chemical Vaporiser" },
      ],
    },
    { link: "/contact-us", name: "Contact Us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex lg:justify-between justify-center items-center border-b lg:px-28 px-2 py-2 bg-gray-50">
        <div className="lg:flex items-center gap-2 hidden">
          <Image src="/india.png" height={30} width={30} alt="India Flag" />
          <span className="font-semibold text-gray-600 text-sm">
            India's Leading Hot Water Products Manufacturer
          </span>
        </div>
        <div className="flex lg:justify-between gap-4 items-center text-sm">
          <span>
            <span className="font-bold">Call for Sales & Support: </span>
            <Link href="tel:+91 9825341494">+91 9825341494</Link>
          </span>
          <span className="hidden lg:block">|</span>
          <Link href="/blog" className="hidden lg:block">
            Blog
          </Link>
          <span className="hidden lg:block">|</span>
          <Link href="get-quotation" className="hidden lg:block">
            Get Quotation
          </Link>
        </div>
      </div>
      <header className="relative flex justify-between items-center lg:px-28 px-4 py-4">
        <Link href="/">
          <Image
            src="/asha-logo.png"
            width={150}
            height={90}
            alt="Asha Corporation Logo"
          />
        </Link>
        <nav className="lg:flex hidden items-center gap-6">
          {NavMenu.map((menu, index) => (
            <div key={index} className="relative group">
              <Link href={menu.link} className="flex items-center">
                {menu.name}
                {menu.icon && menu.icon}
              </Link>
              {menu.subLinks && (
                <div className="absolute hidden group-hover:flex group-hover:flex-col top-3 w-56 right-0 bg-white shadow-lg mt-2 rounded-lg">
                  <ul className="z-50 bg-white border-b-4 drop-shadow-2xl py-2 border-b-yellow-500">
                    {menu.subLinks.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-blue-900 font-light"
                      >
                        <Link href={subLink.link}>{subLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          id="openMenu"
          aria-label="openMenu"
          className="border-2 px-2 py-2 font-bold rounded-md lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries className="h-6 w-6" />
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 bg-white  z-50 w-full h-screen px-4 py-4 overflow-y-auto">
            <div className="flex justify-between items-center">
              <Image
                src="/asha-logo.png"
                width={150}
                height={90}
                alt="Asha Corporation Logo"
              />
              <button
                id="closeMenu"
                aria-label="closeMenu"
                className="text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                <MdClose className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 mt-6">
              {NavMenu.map((menu, index) => (
                <li key={index} className="py-2 border-b">
                  <Link href={menu.link} onClick={() => setIsOpen(false)}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="my-4">
              <span className="text-xl font-bold py-4">
                For Sales & Support: <Link href="">+91 9825341494</Link>
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
