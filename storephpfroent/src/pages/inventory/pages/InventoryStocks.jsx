import React from "react";
import UserHeader from "../../user/sections/UserHeader.jsx";
import UserNav from "../../user/sections/UserNav.jsx";
import InvenStocksBody from "../sections/InvenStocksBody";

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
