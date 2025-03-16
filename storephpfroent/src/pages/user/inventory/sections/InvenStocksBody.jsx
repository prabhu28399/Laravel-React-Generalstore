import React from "react";
import StockList from "./StockList";

const InvenStocksBody = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-gray-100 ml-64 mt-1">
        <main className="w-full p-6 flex-1 overflow-auto">
          <StockList />
        </main>
      </div>
    </div>
  );
};

export default InvenStocksBody;
