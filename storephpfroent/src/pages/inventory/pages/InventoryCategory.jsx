import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import InvenCateBody from "../sections/InvenCateBody";
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
