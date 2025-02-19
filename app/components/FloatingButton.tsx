import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=9825341494&text=Tell%20Me%20More%20About%20Your%20Hot%20Water%20Products"
      className="fixed bottom-4 right-4 rounded-full bg-[#25d366] text-white px-2 py-2 lg:hidden WtsappBtn"
       aria-label="Floating Whatsapp Link"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
  );
};

export default FloatingButton;
