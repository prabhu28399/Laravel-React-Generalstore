import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.get("http://127.0.0.1:8000/api/locations", {
        headers,
      });

      setLocations(res.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocationContext.Provider value={{ locations, loading, fetchLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
