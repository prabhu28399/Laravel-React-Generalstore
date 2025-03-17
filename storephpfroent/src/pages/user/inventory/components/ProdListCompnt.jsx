import React, { useState } from "react";
import { useProduct } from "../../../../context/inventory/ProductContext"; // ✅ Use ProductContext
import { Edit, Trash2, Save } from "lucide-react";

const ProdListCompnt = ({ products }) => {
  const { updateProduct, deleteProduct } = useProduct(); // ✅ Get functions from context

  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleUpdate = (id) => {
    if (!updatedName.trim()) return alert("Product name cannot be empty!");
    updateProduct(id, { product_name: updatedName });
    setEditingProduct(null);
  };

  return (
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
              {editingProduct === product.product_id ? (
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="bg-gray-700 p-1 rounded text-white"
                />
              ) : (
                product.product_name
              )}
            </td>
            <td className="p-2">{product.category?.category_name || "N/A"}</td>
            <td className="p-2">{product.stock?.quantity || "0"}</td>
            <td className="p-2 flex gap-2">
              {editingProduct === product.product_id ? (
                <button
                  onClick={() => handleUpdate(product.product_id)}
                  className="p-1 bg-green-600 rounded hover:bg-green-500"
                >
                  <Save className="w-5 h-5 text-white" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingProduct(product.product_id);
                    setUpdatedName(product.product_name);
                  }}
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
  );
};

export default ProdListCompnt;
