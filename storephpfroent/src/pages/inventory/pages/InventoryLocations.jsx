import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import InvenLocaBody from "../sections/InvenLocaBody";

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
