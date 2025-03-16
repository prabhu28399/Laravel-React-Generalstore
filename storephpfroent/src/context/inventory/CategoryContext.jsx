import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../context/UserContext"; // Import UserContext

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.get("http://127.0.0.1:8000/api/categories", {
        headers,
      });
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (categoryName, user) => {
    try {
      const token = localStorage.getItem("token");

      if (!user || !user.id) {
        console.error("User is not logged in.");
        return;
      }

      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/categories",
        {
          category_name: categoryName,
          user_id: user.id, // ✅ Now we pass user from the component
        },
        { headers }
      );

      setCategories([...categories, res.data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const updateCategory = async (categoryId, updatedName) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      await axios.put(
        `http://127.0.0.1:8000/api/categories/${categoryId}`,
        { category_name: updatedName },
        { headers }
      );

      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId ? { ...cat, category_name: updatedName } : cat
        )
      );
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      await axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`, {
        headers,
      });

      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat.id !== categoryId)
      );

      alert("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error.response?.data || error);

      // Show error on the website
      alert(
        `Failed to delete category: ${
          error.response?.data?.message || "An unknown error occurred"
        }`
      );
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        loading,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
