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
  {
    name: "Inventory",
    icon: <FaMoneyBillWave />,
    subItems: ["Category", "Products", "Locations", "Stocks"], // Submenu items for Inventory
  },
  { name: "Location", icon: <FaCalendarAlt /> },
  { name: "KathaBook", icon: <FaChartBar /> },
  { name: "Billing", icon: <FaBoxOpen /> },
  { name: "Profile", icon: <FaAppStore /> },
  { name: "About Us", icon: <FaGlobe /> },
  { name: "Contact Us", icon: <FaInbox /> },
  { name: "Feedback", icon: <FaUsers /> },
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
              {item.subItems && (
                <FaAngleRight
                  className={`text-sm transition-transform ${
                    open === index ? "rotate-90" : ""
                  }`}
                />
              )}
            </button>

            {/* Dropdown Content for Inventory */}
            {open === index && item.subItems && (
              <ul className="ml-6 mt-1 text-sm text-gray-400">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-1 hover:text-white cursor-pointer"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UserNav;
