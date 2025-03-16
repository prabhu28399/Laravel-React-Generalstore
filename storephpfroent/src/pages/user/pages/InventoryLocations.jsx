import React from "react";
import UserHeader from "../sections/UserHeader.jsx";
import UserNav from "../sections/UserNav.jsx";
import InvenLocaBody from "../inventory/sections/InvenLocaBody.jsx";

const InventoryLocations = () => {
  return (
    <div>
      <UserHeader />
      <UserNav />
      <InvenLocaBody />
    </div>
  );
};

export default InventoryLocations;
