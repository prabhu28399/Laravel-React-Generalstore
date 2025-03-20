import React from "react";
import { Edit, Trash2, Save, X } from "lucide-react";

const ProdListCompnt = ({
  products,
  editingProductId,
  updatedProductData,
  handleEditClick,
  handleSaveClick,
  setEditingProductId,
  setUpdatedProductData,
  deleteProduct,
}) => {
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
            <td className="p-2">{product.category?.category_name || "N/A"}</td>
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
  );
};

export default ProdListCompnt;
