import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserHeaderTheme = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored auth data (optional)
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/user/login");
  };

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/user/index">MyApp</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>

          {/* Profile Section */}
          <div className="relative group">
            <img
              src="https://via.placeholder.com/40" // Replace with actual profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
            />
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeaderTheme;
