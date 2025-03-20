import React, { useState, useEffect, useContext } from "react";
import { useProduct } from "../../../context/inventory/ProductContext";
import { useCategory } from "../../../context/inventory/CategoryContext"; // ✅ Fixed import path
import { AuthContext } from "../../../context/AuthContext";
import { Edit, Trash2, Save, X, Plus } from "lucide-react";
import axios from "axios";

const ProductList = () => {
  const { user, token } = useContext(AuthContext);
  const { products, updateProduct, deleteProduct, loading } = useProduct();
  const { categories } = useCategory(); // ✅ Use categories from CategoryContext

  const [editingProductId, setEditingProductId] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    quantity: "",
    category_id: "",
  });

  if (loading) return <p className="text-white">Loading...</p>;

  const handleEditClick = (product) => {
    setEditingProductId(product.product_id);
    setUpdatedProductData({
      product_name: product.product_name,
      quantity: product.stock?.quantity || 0,
    });
  };

  const handleSaveClick = () => {
    if (!updatedProductData.product_name.trim()) {
      alert("Product name cannot be empty!");
      return;
    }
    updateProduct(editingProductId, updatedProductData);
    setEditingProductId(null);
  };

  const handleAddProduct = async () => {
    if (!user || !user.id || !token) {
      console.error("User ID or Token is missing.");
      alert("Please log in to add products.");
      return;
    }

    if (
      !newProduct.product_name.trim() ||
      !newProduct.quantity ||
      !newProduct.category_id
    ) {
      alert("Please fill all fields before adding the product.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/products", // Direct API URL
        {
          product_name: newProduct.product_name.trim(),
          quantity: parseInt(newProduct.quantity, 10),
          category_id: newProduct.category_id,
          user_id: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Product added successfully!");
        setNewProduct({ product_name: "", quantity: "", category_id: "" });
        // fetchProducts();
      } else {
        alert("Failed to add product. Please try again.");
        console.error("Failed to add product:", response);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors)
          .flat()
          .join("\n");
        alert("Validation errors:\n" + errorMessages);
      } else {
        alert("Failed to add product. Please try again.");
      }
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Product List</h2>

      {/* Add Product Button */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="mb-3 p-2 bg-green-600 rounded hover:bg-green-500 flex items-center"
      >
        <Plus className="w-5 h-5 mr-2" /> Add Product
      </button>

      {/* Add Product Form */}
      {showAddForm && (
        <div className="mb-4 p-3 bg-gray-800 rounded">
          <h3 className="mb-2 text-lg">Add New Product</h3>

          {/* Product Name Input */}
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_name: e.target.value })
            }
            className="w-full p-2 mb-2 bg-gray-700 rounded text-white"
          />

          {/* Quantity Input */}
          <input
            type="number"
            placeholder="Quantity"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: e.target.value })
            }
            className="w-full p-2 mb-2 bg-gray-700 rounded text-white"
          />

          {/* Category Selection Dropdown */}
          <select
            value={newProduct.category_id}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category_id: e.target.value })
            }
            className="w-full p-2 mb-2 bg-gray-700 rounded text-white"
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
              ))
            ) : (
              <option disabled>Loading categories...</option>
            )}
          </select>

          {/* Add Product Button */}
          <button
            onClick={handleAddProduct}
            className="p-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Add Product
          </button>
        </div>
      )}

      {/* Product Table */}
      <table className="w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 p-2">Product ID</th>
            <th className="border border-gray-700 p-2">Product Name</th>
            <th className="border border-gray-700 p-2">Category</th>
            <th className="border border-gray-700 p-2">Quantity</th>
            <th className="border border-gray-700 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id} className="border border-gray-700">
              <td className="p-2">{product.product_id}</td>
              <td className="p-2">
                {editingProductId === product.product_id ? (
                  <input
                    type="text"
                    value={updatedProductData.product_name}
                    onChange={(e) =>
                      setUpdatedProductData((prev) => ({
                        ...prev,
                        product_name: e.target.value,
                      }))
                    }
                    className="bg-gray-700 p-1 rounded text-white"
                  />
                ) : (
                  product.product_name
                )}
              </td>
              <td className="p-2">
                {product.category?.category_name || "N/A"}
              </td>
              <td className="p-2">
                {editingProductId === product.product_id ? (
                  <input
                    type="number"
                    value={updatedProductData.quantity}
                    onChange={(e) =>
                      setUpdatedProductData((prev) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                    className="bg-gray-700 p-1 rounded text-white"
                  />
                ) : (
                  product.stock?.quantity || "0"
                )}
              </td>
              <td className="p-2 flex gap-2">
                {editingProductId === product.product_id ? (
                  <>
                    <button
                      onClick={handleSaveClick}
                      className="p-1 bg-green-600 rounded hover:bg-green-500"
                    >
                      <Save className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={() => setEditingProductId(null)}
                      className="p-1 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEditClick(product)}
                    className="p-1 bg-blue-600 rounded hover:bg-blue-500"
                  >
                    <Edit className="w-5 h-5 text-white" />
                  </button>
                )}
                <button
                  onClick={() => deleteProduct(product.product_id)}
                  className="p-1 bg-red-600 rounded hover:bg-red-500"
                >
                  <Trash2 className="w-5 h-5 text-white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
