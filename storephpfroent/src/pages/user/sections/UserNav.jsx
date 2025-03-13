import React, { useState } from "react";
import {
  FaHome,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaChartBar,
  FaBoxOpen,
  FaAppStore,
  FaGlobe,
  FaInbox,
  FaUsers,
  FaBullhorn,
  FaAngleRight,
} from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "Getting Paid", icon: <FaMoneyBillWave /> },
  { name: "Booking Calendar", icon: <FaCalendarAlt /> },
  { name: "Sales", icon: <FaChartBar /> },
  { name: "Catalog", icon: <FaBoxOpen /> },
  { name: "Apps", icon: <FaAppStore /> },
  { name: "Site & Mobile App", icon: <FaGlobe /> },
  { name: "Inbox", icon: <FaInbox /> },
  { name: "Customers & Leads", icon: <FaUsers /> },
  { name: "Marketing", icon: <FaBullhorn /> },
];

const UserNav = () => {
  const [open, setOpen] = useState(null);

  const toggleMenu = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <nav className="w-64 h-screen bg-gray-900 text-white p-4 fixed">
      {/* Header */}
      <div className="flex items-center justify-between py-3 px-2 text-gray-300 font-semibold bg-gray-800 rounded">
        <span>Setup</span>
      </div>

      {/* Menu Items */}
      <ul className="mt-2">
        {menuItems.map((item, index) => (
          <li key={index} className="group">
            <button
              onClick={() => toggleMenu(index)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-800"
            >
              <span className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </span>
              <FaAngleRight
                className={`text-sm transition-transform ${
                  open === index ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Dropdown Content (if needed) */}
            {open === index && (
              <ul className="ml-6 mt-1 text-sm text-gray-400">
                <li className="py-1 hover:text-white">Option 1</li>
                <li className="py-1 hover:text-white">Option 2</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UserNav;
