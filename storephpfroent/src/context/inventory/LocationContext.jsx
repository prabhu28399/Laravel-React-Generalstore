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

  // ✅ Update location (room_no, row_no, section, container_no only)
  const updateLocation = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      await axios.patch(
        `http://127.0.0.1:8000/api/locations/${id}`,
        updatedData,
        { headers }
      );

      fetchLocations(); // Refresh locations after update
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  return (
    <LocationContext.Provider value={{ locations, loading, fetchLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
