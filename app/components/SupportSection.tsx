import Link from "next/link";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";

const SupportSection = () => {
  return (
    <section className="bg-[#111827] text-white flex justify-center items-center lg:py-4 py-2 lg:px-28 px-2">
      <div className="flex lg:flex-row flex-col lg:gap-3 gap-1 items-center">
        <span className="text-sm text-white font-bold">
          Have any Questions?
        </span>
        <span>Feel Free to Talk</span>
        <Link
          href="tel:+91 9825341494"
          className="flex items-center px-3 py-2 rounded-md gap-3 bg-red-600"
        >
          <PiPhoneCallBold /> 9825341494
        </Link>
        <span className="hidden lg:flex">|</span>
        <span className="hidden lg:flex">Chat with Us on</span>
        <Link
          href="https://api.whatsapp.com/send?phone=9825341494&text=I%20Have%20a%20Question%20About%20your%20Products"
          className="flex items-center text-gray-700 font-bold px-3 py-2 rounded-md gap-3 bg-[#25d366]"
        >
          <FaWhatsapp />
          9825341494
        </Link>
      </div>
    </section>
  );
};

export default SupportSection;
