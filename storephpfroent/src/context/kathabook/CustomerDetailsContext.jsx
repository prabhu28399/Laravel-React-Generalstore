import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";

export const CustomerDetailsContext = createContext();

export const CustomerDetailsProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    if (selectedCustomerId) {
      fetch(
        `http://127.0.0.1:8000/api/customers/${selectedCustomerId}/transactions`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      )
        .then((res) => res.json())
        .then((data) => setCustomerDetails(data))
        .catch((err) => console.error("Error fetching customer details:", err));
    }
  }, [selectedCustomerId, authToken]);

  return (
    <CustomerDetailsContext.Provider
      value={{ customerDetails, setSelectedCustomerId }}
    >
      {children}
    </CustomerDetailsContext.Provider>
  );
};
