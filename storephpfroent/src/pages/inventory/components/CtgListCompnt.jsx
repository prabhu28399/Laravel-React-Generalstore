import React from "react";
import { Edit, Trash2 } from "lucide-react";

const CtgListCompnt = ({
  categories,
  editingCategory,
  updatedName,
  setUpdatedName,
  setEditingCategory,
  handleUpdateCategory,
  deleteCategory,
}) => {
  return (
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
          <tr key={category.id} className="border border-gray-700">
            <td className="p-2">
              {category.category_id || `pct${category.id}`}
            </td>
            <td className="p-2">
              {editingCategory === category.id ? (
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="bg-gray-700 p-1 rounded text-white"
                />
              ) : (
                category.category_name
              )}
            </td>
            <td className="p-2 flex gap-2">
              {editingCategory === category.id ? (
                <button
                  onClick={() => handleUpdateCategory(category.id)}
                  className="p-1 bg-green-600 rounded hover:bg-green-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingCategory(category.id);
                    setUpdatedName(category.category_name);
                  }}
                  className="p-1 bg-blue-600 rounded hover:bg-blue-500"
                >
                  <Edit className="w-5 h-5 text-white" />
                </button>
              )}
              <button
                onClick={() => deleteCategory(category.id)}
                className="p-1 bg-red-600 rounded hover:bg-red-500"
              >
                <Trash2 className="w-5 h-5 text-white" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CtgListCompnt;
