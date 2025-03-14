import React from "react";
import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <div className="bg-gray-100 p-6 flex justify-center flex-row items-center space-y">
      {/* User Card */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
        <h2 className="text-xl font-semibold mb-4">User</h2>
        <p className="text-gray-600 mb-4">Access the portal as a user.</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/user/register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </Link>
          <Link
            to="/user/login"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Admin Card */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
        <h2 className="text-xl font-semibold mb-4">Admin</h2>
        <p className="text-gray-600 mb-4">Access the portal as an admin.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
