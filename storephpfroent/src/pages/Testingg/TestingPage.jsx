import React from "react";
import UserHeader from "../user/sections/UserHeader";
import UserNav from "../user/sections/UserNav";
import HoloTableComponent from "./HoloTableComponent";

// import HoloTable from "./HoloTable";

const TestingPage = () => {
  return (
    <div className="flex ">
      {/* Sidebar Navigation */}
      <UserNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-red-100">
        <UserHeader />

        {/* Main Content Below Header */}
        <main className="px-90 w-full mt-14">
          {" "}
          <h3>Gork Ai</h3>
          {/* <HoloTable /> */}
          <HoloTableComponent />
        </main>
      </div>
    </div>
  );
};

export default TestingPage;
