import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import StatsCard from "../components/StatsCard.jsx";

const UserBody = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-gray-100 ml-64 mt-1">
        <main className="w-full p-6 flex-1 overflow-auto">
          <WelcomeMessage />
          <StatsCard />
        </main>
      </div>
    </div>
  );
};

export default UserBody;
