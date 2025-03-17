import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.get("http://127.0.0.1:8000/api/products", {
        headers,
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update product function (with response handling)
  const updateProduct = async (product_id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.put(
        `http://127.0.0.1:8000/api/products/${product_id}`,
        updatedData,
        { headers }
      );

      // Update state with the new product data from the response
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.product_id === product_id ? response.data : product
        )
      );
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
    }
  };

  // ✅ Delete product function (with console logs for debugging)
  // const deleteProduct = async (id) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const headers = { Authorization: `Bearer ${token}` };

  //     await axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
  //       headers,
  //     });

  //     console.log("Product deleted:", id);

  //     // ✅ Remove from state
  //     setProducts((prevProducts) =>
  //       prevProducts.filter((product) => product.id !== id)
  //     );
  //   } catch (error) {
  //     console.error(
  //       "Error deleting product:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  const deleteProduct = async (product_id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      await axios.delete(`http://127.0.0.1:8000/api/products/${product_id}`, {
        headers,
      });

      // Update state to remove deleted product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.product_id !== product_id)
      );

      console.log("Product deleted successfully");
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
