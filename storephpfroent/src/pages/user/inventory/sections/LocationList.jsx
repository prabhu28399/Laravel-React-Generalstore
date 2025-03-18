import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "../../../../context/inventory/LocationContext";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import ProductLocaCompnt from "../components/ProductLocaCompnt";

const LocationList = () => {
  const { user, token } = useContext(AuthContext);
  const { locations, fetchLocations, loading } = useLocation();
  const [editingLocation, setEditingLocation] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    room_no: "",
    row_no: "",
    section: "",
    container_no: "",
  });

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleEditClick = (location) => {
    setEditingLocation(location.id);
    setUpdatedData({
      room_no: location.room_no,
      row_no: location.row_no,
      section: location.section,
      container_no: location.container_no,
    });
  };

  const handleUpdateLocation = async (id, updatedData) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/locations/${id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingLocation(null);
      fetchLocations();
    } catch (error) {
      console.error(
        "Error updating location:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ProductLocaCompnt
      locations={locations}
      loading={loading}
      editingLocation={editingLocation}
      updatedData={updatedData}
      setUpdatedData={setUpdatedData}
      handleEditClick={handleEditClick}
      handleUpdateLocation={handleUpdateLocation}
    />
  );
};

export default LocationList;
