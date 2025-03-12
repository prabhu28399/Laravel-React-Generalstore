import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBox,
  FaMapMarkerAlt,
  FaBook,
  FaUser,
  FaHeadset,
} from "react-icons/fa";

const UNavbar = () => {
  return (
    <div className="w-64 h-screen bg-indigo-700 text-white p-5 shadow-lg fixed">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        {/* Inventory */}
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition ${
              isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
            }`
          }
        >
          <FaBox size={20} />
          <span>Inventory</span>
        </NavLink>

        {/* Location Management */}
        <NavLink
          to="/location"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition ${
              isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
            }`
          }
        >
          <FaMapMarkerAlt size={20} />
          <span>Location Management</span>
        </NavLink>

        {/* Kathabook */}
        <NavLink
          to="/kathabook"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition ${
              isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
            }`
          }
        >
          <FaBook size={20} />
          <span>Kathabook</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition ${
              isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
            }`
          }
        >
          <FaUser size={20} />
          <span>Profile</span>
        </NavLink>

        {/* Contact Support */}
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition ${
              isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
            }`
          }
        >
          <FaHeadset size={20} />
          <span>Contact Support</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default UNavbar;
