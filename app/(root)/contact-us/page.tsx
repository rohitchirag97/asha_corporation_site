import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  MdCall,
  MdAlternateEmail,
  MdOutlinePersonPinCircle,
} from "react-icons/md";

const ContactPage = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="lg:px-28 px-2 w-full py-8 pattern flex justify-center items-center">
        <h1 className="bg-white text-gray-700 text-5xl font-extrabold px-6 border border-foreground">
          Contact Us
        </h1>
      </div>

      {/* Contact Details and Form */}
      <div className="flex flex-col lg:flex-row lg:px-28 px-2 w-full justify-start gap-6 items-center">
        {/* Contact Details */}
        <div className="bg-red-600 w-full lg:w-[450px] space-y-5 py-6 px-8 border-r-4 border-r-red-950 text-white">
          {/* Address */}
          <div>
            <span className="text-lg font-extrabold">Address</span>
            <div className="flex items-start gap-2">
              <MdOutlinePersonPinCircle className="h-16 w-16" />
              <p>
                Plot No.8, Phase-2, B/H Professor Soc., Near Karamsad Overbridge
                G.I.D.C, V.U.Nagar - 388120 Anand - Gujarat (India)
              </p>
            </div>
          </div>

          {/* Email */}
          <div>
            <span className="text-lg font-extrabold">Email</span>
            <div className="flex items-center gap-2">
              <MdAlternateEmail className="h-6 w-6" />
              <p>ashacorporation22@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div>
            <span className="text-lg font-extrabold">Phone</span>
            <div className="flex items-center gap-2">
              <MdCall className="h-6 w-6" />
              <p>+91 9825341494</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-lg font-extrabold">Our Socials</span>
            <div className="flex gap-6 mt-2 text-4xl">
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
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full justify-center items-start">
          <span className="text-3xl font-extralight text-gray-700">
            Send us a Message
          </span>
          <form className="w-full space-y-6 my-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border-b rounded-lg p-2 focus:outline-none"
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="phone"
                placeholder="* Phone Number"
                required
                className="w-full border-b rounded-lg p-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="* Email"
                required
                className="w-full border-b rounded-lg p-2 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border-b rounded-lg p-2 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border-b rounded-lg p-2 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-auto bg-yellow-500 px-5 py-2 font-extrabold text-gray-700 prodBtn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.988661283077!2d72.9243465!3d22.542097500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4ddddb93ea45%3A0xdeb60447879b858f!2sAsha%20Corporation!5e0!3m2!1sen!2sin!4v1735729627190!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="overflow-hidden border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
