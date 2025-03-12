import React from "react";

const ProfileTheme = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
        {/* Profile Picture */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="text-center mt-14 p-6">
        <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-500">johndoe@example.com</p>
        <div className="mt-4 space-y-3 text-gray-600">
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Mobile:</strong> +91 9123456789
          </p>
          <p>
            <strong>Address:</strong> 123, Street Name, City, State, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTheme;
