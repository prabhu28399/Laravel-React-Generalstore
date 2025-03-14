import React from "react";

const HomeHeader = () => {
  return (
    <header className="bg-[#0a0f2c] py-4 px-6 flex items-center justify-between">
      <nav className="flex space-x-8 text-white font-medium">
        <a href="#" className="hover:text-gray-300">
          HOME
        </a>
        <a href="#" className="hover:text-gray-300">
          OUR WORK
        </a>
        <a href="#" className="hover:text-gray-300">
          WHAT WE DO
        </a>
        <a href="#" className="hover:text-gray-300">
          ABOUT US
        </a>
      </nav>
      <a
        href="#"
        className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition"
      >
        Contact Us
      </a>
    </header>
  );
};

export default HomeHeader;
