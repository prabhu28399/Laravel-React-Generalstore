import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  { name: "Home", link: "/user/index", icon: <FaHome /> },
  {
    name: "Inventory",
    icon: <FaMoneyBillWave />,
    subItems: [
      { name: "Category", link: "/inventory/category" },
      { name: "Products", link: "/inventory/product" },
      { name: "Locations", link: "/inventory/location" },
      { name: "Stocks", link: "/inventory/stock" },
    ],
  },
  {
    name: "KathaBook",
    link: "/kathabook/customers",
    icon: <FaChartBar />,
  },
  { name: "Billing", link: "/billing", icon: <FaBoxOpen /> },
  { name: "Profile", link: "/profile", icon: <FaAppStore /> },
  { name: "About Us", link: "/about", icon: <FaGlobe /> },
  { name: "Contact Us", link: "/contact", icon: <FaInbox /> },
  { name: "Feedback", link: "/feedback", icon: <FaUsers /> },
  { name: "Testing", link: "/testing", icon: <FaUsers /> },
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
            {item.subItems ? (
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
            ) : (
              <Link
                to={item.link || "#"}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-800"
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            )}

            {/* Dropdown for SubItems */}
            {open === index && item.subItems && (
              <ul className="ml-6 mt-1 text-sm text-gray-400">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-1 hover:text-white">
                    <Link to={subItem.link} className="block w-full">
                      {subItem.name}
                    </Link>
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
