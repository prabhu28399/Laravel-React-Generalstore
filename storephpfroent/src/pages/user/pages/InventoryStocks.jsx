import React from "react";
import UserHeader from "../sections/UserHeader.jsx";
import UserNav from "../sections/UserNav.jsx";
import InvenStocksBody from "../inventory/sections/InvenStocksBody.jsx";

const InventoryStocks = () => {
  return (
    <div>
      <UserHeader />
      <UserNav />
      <InvenStocksBody />
    </div>
  );
};

export default InventoryStocks;
