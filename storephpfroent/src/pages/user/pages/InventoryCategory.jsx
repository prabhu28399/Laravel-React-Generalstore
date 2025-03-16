import React from "react";
import UserHeader from "../sections/UserHeader.jsx";
import UserNav from "../sections/UserNav.jsx";
import InvenCateBody from "../inventory/sections/InvenCateBody.jsx";
const InventoryCategory = () => {
  return (
    <div>
      <UserHeader />
      <UserNav />
      <InvenCateBody />
    </div>
  );
};

export default InventoryCategory;
