import React from "react";
import { useInventory } from "../../../../context/InventoryContext.jsx";
import { Eye, Edit, Trash2 } from "lucide-react"; // Import icons

const CategoryList = () => {
  const { categories, loading } = useInventory();

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <table className="w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 p-2">Category Id</th>
            <th className="border border-gray-700 p-2">Category</th>
            <th className="border border-gray-700 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.category_id} className="border border-gray-700">
              <td className="p-2">{category.category_id}</td>
              <td className="p-2 font-bold">{category.category_name}</td>
              <td className="p-2 flex gap-2">
                <Eye className="w-5 h-5 cursor-pointer hover:text-gray-400" />
                <Edit className="w-5 h-5 cursor-pointer hover:text-gray-400" />
                <Trash2 className="w-5 h-5 cursor-pointer hover:text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
