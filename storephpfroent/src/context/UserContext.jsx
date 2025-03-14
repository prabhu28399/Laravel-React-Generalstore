import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // If using Axios for API calls

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user"); // Replace with your actual API endpoint
        setUser(response.data); // Assuming response contains { name, image }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
