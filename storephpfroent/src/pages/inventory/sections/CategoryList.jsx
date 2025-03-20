import React, { useState, useContext } from "react";
import { useCategory } from "../../../context/inventory/CategoryContext";
import { Plus } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import CtgListCompnt from "../components/CtgListCompnt"; // ✅ Import table component

const CategoryList = () => {
  const { token, user } = useContext(AuthContext);
  const { categories, updateCategory, deleteCategory, loading } = useCategory();

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
          category_name: newCategory,
          user_id: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Category added:", response.data);
      setNewCategory("");
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
        <CtgListCompnt
          categories={categories}
          editingCategory={editingCategory}
          updatedName={updatedName}
          setUpdatedName={setUpdatedName}
          setEditingCategory={setEditingCategory}
          handleUpdateCategory={handleUpdateCategory}
          deleteCategory={deleteCategory}
        />
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
