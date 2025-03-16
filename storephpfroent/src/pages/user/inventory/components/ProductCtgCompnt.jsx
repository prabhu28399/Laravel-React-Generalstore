import React from "react";

const ProductCtgCompnt = ({ categories }) => {
  return (
    <div className="container my-10 mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
      <div className="flex justify-end mb-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Create New
        </button>
      </div>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr className="text-gray-700">
            <th className="border p-2">#</th>
            <th className="border p-2">Category Name</th>
            <th className="border p-2">Edit</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr
              key={category.id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{category.category_name}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
              </td>
              <td className="border p-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCtgCompnt;
