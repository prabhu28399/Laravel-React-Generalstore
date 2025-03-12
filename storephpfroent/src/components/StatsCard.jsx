import React from "react";
import { FaAward, FaStar } from "react-icons/fa";

const StatsCard = () => {
  return (
    <div className="flex space-x-6 justify-center">
      {/* Card 1 */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md flex items-center space-x-4 w-64">
        <FaAward className="text-orange-500 text-3xl" />
        <div>
          <h2 className="text-2xl font-bold text-black">75K+</h2>
          <p className="text-gray-600">Expert Chat & Call Minutes</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md flex items-center space-x-4 w-64">
        <FaStar className="text-orange-500 text-3xl" />
        <div>
          <h2 className="text-2xl font-bold text-black">4.9</h2>
          <p className="text-gray-600">Average Expert Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
