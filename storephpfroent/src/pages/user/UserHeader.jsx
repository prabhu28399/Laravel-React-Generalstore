import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaRegNewspaper,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          {/* Site Name */}
          <button className="flex items-center space-x-1 text-gray-700">
            <span>My Site 1</span>
            <FaChevronDown size={12} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <button className="text-gray-700">Explore</button>
            <button className="text-gray-700">Hire a Professional</button>
            <button className="text-gray-700">Help</button>
            <button className="bg-purple-600 text-white px-3 py-1 rounded-md">
              Upgrade
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2"
            />
          </div>

          {/* Icons */}
          <FaBell className="text-gray-700 cursor-pointer hidden md:block" />
          <FaRegNewspaper className="text-gray-700 cursor-pointer hidden md:block" />

          {/* Profile Image & Logout */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Replace with user profile image
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-100 py-2">
          <button className="py-2 text-gray-700">Explore</button>
          <button className="py-2 text-gray-700">Hire a Professional</button>
          <button className="py-2 text-gray-700">Help</button>
          <button className="py-2 bg-purple-600 text-white px-4 py-1 rounded-md">
            Upgrade
          </button>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
