import React, { useState } from "react";
import UserHeader from "../sections/UserHeader.jsx";
import UserNav from "../sections/UserNav.jsx";
import UserBody from "../sections/UserBody.jsx";

const UserIndex = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile sidebar

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Hidden on small screens) */}
      <UserNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex-1 flex flex-col bg-gray-100 ml-64 mt-14">
        {/* Top Header */}
        <UserHeader setMenuOpen={setMenuOpen} />

        {/* Main Content */}
        <main className="w-full p-1 flex-1 overflow-auto">
          <UserBody />
        </main>
      </div>
    </div>
  );
};

export default UserIndex;
