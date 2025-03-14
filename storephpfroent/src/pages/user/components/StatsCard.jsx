import React from "react";
import { FaAward, FaStar } from "react-icons/fa";

const StatsCard = () => {
  return (
    <div className="flex space-x-4 justify-center">
      {/* Card 1 */}
      <div className="bg-orange-50 p-4 rounded-lg shadow-md flex items-center space-x-2 w-56">
        <FaAward className="text-orange-500 text-2xl" />
        <div>
          <h2 className="text-xl font-bold text-black">75K+</h2>
          <p className="text-gray-600 text-sm">Expert Chat & Call Minutes</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-orange-50 p-4 rounded-lg shadow-md flex items-center space-x-2 w-56">
        <FaStar className="text-orange-500 text-2xl" />
        <div>
          <h2 className="text-xl font-bold text-black">4.9</h2>
          <p className="text-gray-600 text-sm">Average Expert Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
