import React, { useContext } from "react";
import { FaSearch, FaBell, FaRegNewspaper } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext"; // Import AuthContext

const UHeaderCompnt = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // ✅ Get logged-in user

  // Default profile image
  const defaultImage =
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg";

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-4 py-2 shadow-md">
      {/* Left Section - Logo and Site Name */}
      <div className="flex items-center space-x-10">
        <span className="text-xl font-bold">3P</span>
        <button className="flex items-center space-x-1 text-gray-700">
          <span>
            {user ? user.shopname : "Shop Name"}{" "}
            {/* ✅ Show only the shop name */}
          </span>
        </button>
      </div>

      {/* Right Section - Search Bar and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative w-72 h-10 rounded-md bg-cover bg-center">
          <div className="absolute inset-0 flex items-center px-3 bg-white bg-opacity-70 rounded-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for tools, apps, help & more..."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>
        </div>

        <FaBell className="text-gray-700 cursor-pointer" />
        <FaRegNewspaper className="text-gray-700 cursor-pointer" />

        {/* Profile Image with Logout Hover */}
        <div className="relative group">
          <img
            src={defaultImage}
            alt="User Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          <div className="absolute right-0 mt-0 w-24 bg-white shadow-lg rounded-md hidden group-hover:block">
            <button
              onClick={() => navigate("/")}
              className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-3 py-1 rounded-md">
          AI
        </button>
      </div>
    </header>
  );
};

export default UHeaderCompnt;
