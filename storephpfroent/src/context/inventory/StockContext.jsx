import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.get("http://127.0.0.1:8000/api/stocks", {
        headers,
      });
      setStocks(res.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StockContext.Provider value={{ stocks, loading }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => useContext(StockContext);
