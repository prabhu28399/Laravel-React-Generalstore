import React, { useState, useContext } from "react";
import { useCategory } from "../../../../context/inventory/CategoryContext"; // ✅ Using Category Context
import { Edit, Trash2, Plus } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../../../context/AuthContext";

const CategoryList = () => {
  const { token, user } = useContext(AuthContext); // ✅ Get token and user
  const { categories, addCategory, updateCategory, deleteCategory, loading } =
    useCategory();

  const [editingCategory, setEditingCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddCategory = async () => {
    if (!user || !user.id) {
      console.error("User ID is missing.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/categories",
        {
          category_name: newCategory, // ✅ Use correct field name
          user_id: user.id, // ✅ Include user_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Category added:", response.data);
      setNewCategory(""); // ✅ Clear input after adding
    } catch (error) {
      console.error(
        "Error adding category:",
        error.response?.data || error.message
      );
    }
  };

  const handleUpdateCategory = (id) => {
    if (!updatedName.trim()) return alert("Category name cannot be empty!");
    updateCategory(id, updatedName);
    setEditingCategory(null);
  };

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2 bg-green-600 rounded hover:bg-green-500 flex items-center"
        >
          <Plus className="w-5 h-5 mr-1" /> Add Category
        </button>
      </div>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
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
      )}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg mb-3">Add New Category</h3>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white mb-3"
              placeholder="Enter category name"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 bg-gray-600 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="p-2 bg-green-600 rounded hover:bg-green-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
