import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import InvenProductsBody from "../sections/InvenProductsBody";

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
