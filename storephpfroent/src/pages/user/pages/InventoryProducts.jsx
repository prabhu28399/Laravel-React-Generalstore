import React from "react";
import UserHeader from "../sections/UserHeader.jsx";
import UserNav from "../sections/UserNav.jsx";
import InvenProductsBody from "../inventory/sections/InvenProductsBody.jsx";

const InventoryProducts = () => {
  return (
    <div>
      {" "}
      <UserHeader />
      <UserNav />
      <InvenProductsBody />
    </div>
  );
};

export default InventoryProducts;
