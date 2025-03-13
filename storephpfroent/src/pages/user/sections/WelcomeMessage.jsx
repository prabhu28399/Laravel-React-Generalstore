import React from "react";
import StatsCard from "../components/StatsCard.jsx"; // Importing StatsCard component

const WelcomeMessage = ({ username }) => {
  return (
    <div className="p-6 bg-gray-100 mt-0 min-h-screen">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-gray-900 mb-20">
        Welcome, {username}
      </h1>

      {/* Stats Cards Section */}
      <StatsCard />

      {/* More components can be added below */}
      <div className="mt-6">
        {/* Example Placeholder for Additional Components */}
        {/* <AnotherComponent /> */}
        {/* <YetAnotherComponent /> */}
      </div>
    </div>
  );
};

export default WelcomeMessage;
