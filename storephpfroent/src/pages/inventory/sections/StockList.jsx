import React, { useEffect } from "react";
import { useStock } from "../../../context/inventory/StockContext"; // Correct import
import { useProduct } from "../../../context/inventory/ProductContext"; // Import Product Context
import { Edit, Trash2 } from "lucide-react";

const StockList = () => {
  const { stocks, loading } = useStock(); // Get stock data from StockContext
  const { products } = useProduct(); // Get product data from ProductContext

  useEffect(() => {
    console.log("Stock Data:", stocks);
    console.log("Product Data:", products); // Debug Product Data
  }, [stocks, products]);

  if (loading) return <p className="text-white">Loading...</p>;

  // Filter products with quantity < 50
  const lowStockProducts = stocks.filter((stock) => stock.quantity < 50);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Low Stock Alert</h2>
      {lowStockProducts.length > 0 ? (
        <table className="w-full border border-gray-700 text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 p-2">Product ID</th>
              <th className="border border-gray-700 p-2">Product Name</th>
              <th className="border border-gray-700 p-2">Category</th>
              <th className="border border-gray-700 p-2">Quantity</th>
              {/* <th className="border border-gray-700 p-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {lowStockProducts.map((stock) => {
              // Find product details using product_id
              const product = products.find(
                (p) => p.product_id === stock.product_id
              );

              return (
                <tr key={stock.product_id} className="border border-gray-700">
                  <td className="p-2">{stock.product_id}</td>
                  <td className="p-2 font-bold">
                    {product?.product_name || "N/A"}
                  </td>
                  <td className="p-2">
                    {product?.category?.category_name || "N/A"}
                  </td>
                  <td className="p-2 text-red-500 font-bold">
                    {stock.quantity}
                  </td>
                  {/* <td className="p-2 flex gap-2">
                    <button className="p-1 bg-blue-600 rounded hover:bg-blue-500">
                      <Edit className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-1 bg-red-600 rounded hover:bg-red-500">
                      <Trash2 className="w-5 h-5 text-white" />
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-green-400">
          All products have sufficient stock.
        </p>
      )}
    </div>
  );
};

export default StockList;
