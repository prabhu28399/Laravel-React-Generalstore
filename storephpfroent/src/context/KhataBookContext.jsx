// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "./AuthContext"; // Import AuthContext

// // Create Context
// const KhataBookContext = createContext();

// // Context Provider Component
// export const KhataBookProvider = ({ children }) => {
//   const [customers, setCustomers] = useState([]);
//   const [transactions, setTransactions] = useState([]);
//   const [payments, setPayments] = useState([]);

//   const { token, loading } = useContext(AuthContext); // Use token and loading from AuthContext
//   const API_BASE_URL = "http://127.0.0.1:8000/api";

//   // Fetch KhataBook data when token is available and auth is not loading
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!token || loading) return; // Skip if no token or still loading auth

//       try {
//         // Axios config with Authorization header
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         };

//         console.log("Fetching customers...");
//         const customersResponse = await axios.get(
//           `${API_BASE_URL}/customers`,
//           config
//         );
//         console.log("Customers fetched:", customersResponse.data);
//         setCustomers(customersResponse.data);

//         console.log("Fetching transactions...");
//         const transactionsResponse = await axios.get(
//           `${API_BASE_URL}/transactions`,
//           config
//         );
//         console.log("Transactions fetched:", transactionsResponse.data);
//         setTransactions(transactionsResponse.data);

//         console.log("Fetching payments...");
//         const paymentsResponse = await axios.get(
//           `${API_BASE_URL}/payments`,
//           config
//         );
//         console.log("Payments fetched:", paymentsResponse.data);
//         setPayments(paymentsResponse.data);
//       } catch (error) {
//         console.error("Error in fetchData:", error.message);
//         if (error.response) {
//           console.error("Response data:", error.response.data);
//           console.error("Response status:", error.response.status);
//         } else if (error.request) {
//           console.error("No response received:", error.request);
//         } else {
//           console.error("Error setting up request:", error.message);
//         }
//       }
//     };

//     fetchData();
//   }, [token, loading]); // Re-run when token or loading changes

//   // Method to add a customer
//   const addCustomer = async (customerData) => {
//     if (!token) return; // Ensure token exists

//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await axios.post(
//         `${API_BASE_URL}/customers`,
//         customerData,
//         config
//       );
//       setCustomers([...customers, response.data]);
//     } catch (error) {
//       console.error("Failed to add customer:", error.message);
//     }
//   };

//   // Context value
//   const value = {
//     customers,
//     transactions,
//     payments,
//     setCustomers,
//     setTransactions,
//     setPayments,
//     addCustomer,
//   };

//   return (
//     <KhataBookContext.Provider value={value}>
//       {children}
//     </KhataBookContext.Provider>
//   );
// };

// // Custom Hook to use the context
// export const useKhataBook = () => {
//   const context = useContext(KhataBookContext);
//   if (!context) {
//     throw new Error("useKhataBook must be used within a KhataBookProvider");
//   }
//   return context;
// };

// export default KhataBookContext;
