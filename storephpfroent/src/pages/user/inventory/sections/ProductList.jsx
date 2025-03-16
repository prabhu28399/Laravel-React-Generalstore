import React, { useEffect } from "react";
import { useInventory } from "../../../../context/InventoryContext.jsx";
import { Edit, Trash2 } from "lucide-react";

const ProductList = () => {
  const { products, loading } = useInventory();

  useEffect(() => {
    console.log("Products Data:", products);
  }, [products]); // Debug API response

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Product List</h2>
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
              <td className="p-2 font-bold">{product.product_name}</td>
              <td className="p-2">
                {product.category?.category_name || "N/A"}
              </td>
              <td className="p-2">{product.stock?.quantity || "0"}</td>
              <td className="p-2 flex gap-2">
                <button className="p-1 bg-blue-600 rounded hover:bg-blue-500">
                  <Edit className="w-5 h-5 text-white" />
                </button>
                <button className="p-1 bg-red-600 rounded hover:bg-red-500">
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
