import React from "react";
import CategoryList from "./CategoryList";

const InvenCateBody = () => {
  return (
    <div className="flex pt-10 overflow-hidden">
      <div className="flex-1 flex flex-col bg-gray-100 ml-64 mt-1">
        <main className="w-full p-6 flex-1 overflow-auto">
          <h3>category</h3>
          <CategoryList />
        </main>
      </div>
    </div>
  );
};

export default InvenCateBody;
