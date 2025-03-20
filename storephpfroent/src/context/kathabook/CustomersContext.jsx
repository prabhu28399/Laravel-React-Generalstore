// import React from "react";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CustomersContext = createContext();

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.get("http://127.0.0.1:8000/api/customers", {
        headers,
      });
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomersContext.Provider value={{ customers, loading }}>
      {children}
    </CustomersContext.Provider>
  );
};

export const useCustomers = () => useContext(CustomersContext);
