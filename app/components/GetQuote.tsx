'use client'
import React from "react";

const GetQuote = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="pattern flex flex-col lg:flex-row items-center justify-between gap-4 lg:px-28 px-2 py-8">
      <div className="flex flex-col space-y-4">
        <span className="text-red-800 font-bold">
          Chosen the product you need?
        </span>
        <span className="text-4xl font-extrabold text-gray-800">
          Get Quotation for it Now
        </span>
      </div>
      <div className="bg-white border rounded-lg shadow-md py-8 px-8">
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name?"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address?"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone Number?"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <select
              name="product"
              id="product"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <option value="">Choose a Product</option>
              <option value="heat-pump">Heat Pump Water Heater</option>
              <option value="gas-fired">Gas Fired Water Heater</option>
              <option value="glass-tube">Glass Tube Solar Water Heater</option>
              <option value="flat-tube">Flat Tube Solar Water Heater</option>
              <option value="electric-storage">
                Electric Storage Water Heater
              </option>
              <option value="wood-fired">Wood Fired Water Heater</option>
              <option value="chemical-vaporizer">Chemical Vaporizer</option>
            </select>
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Any Message?"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 px-6 py-3 text-xl text-gray-800 font-extrabold prodBtn hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Quotation
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
