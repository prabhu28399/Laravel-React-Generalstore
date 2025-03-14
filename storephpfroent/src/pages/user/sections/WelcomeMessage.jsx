import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext"; // Import AuthContext

const WelcomeMessage = ({ shopname }) => {
  const { user } = useContext(AuthContext); // ✅ Get logged-in user

  return (
    <div className="p-1 bg-gray-100 mt-0">
      <h1 className="text-3xl font-bold text-gray-900 mb-20">
        Welcome {user ? user.shopname : "Shop Name"}{" "}
      </h1>
    </div>
  );
};

export default WelcomeMessage;
