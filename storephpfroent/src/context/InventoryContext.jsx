import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        if (!token) {
          console.error("No auth token found! User may not be logged in.");
          return;
        }

        const headers = { Authorization: `Bearer ${token}` };

        const [categoryRes, locationRes, productRes, stockRes] =
          await Promise.all([
            axios.get("http://127.0.0.1:8000/api/categories", { headers }),
            axios.get("http://127.0.0.1:8000/api/locations", { headers }),
            axios.get("http://127.0.0.1:8000/api/products", { headers }),
            axios.get("http://127.0.0.1:8000/api/stocks", { headers }),
          ]);

        setCategories(categoryRes.data);
        setLocations(locationRes.data);
        setProducts(productRes.data);
        setStocks(stockRes.data);
      } catch (error) {
        console.error("Error fetching inventory data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventoryData();
  }, []);

  return (
    <InventoryContext.Provider
      value={{ categories, locations, products, stocks, loading }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
