import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "../../../../context/inventory/LocationContext";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";

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
    setEditingLocation(location.id); // Store ID of the location being edited

    // Pre-fill form with existing data
    setUpdatedData({
      room_no: location.room_no,
      row_no: location.row_no,
      section: location.section,
      container_no: location.container_no,
    });
  };

  // Make sure updatedData is passed correctly
  const handleSubmit = () => {
    handleUpdateLocation(editingLocation, updatedData);
  };

  const handleUpdateLocation = async (id, updatedData) => {
    if (!updatedData) {
      console.error("Error: updatedData is undefined");
      return;
    }

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/locations/${id}`,
        {
          room_no: updatedData.room_no,
          row_no: updatedData.row_no,
          section: updatedData.section,
          container_no: updatedData.container_no,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setEditingLocation(null);
      fetchLocations(); // Refresh location list
    } catch (error) {
      console.error(
        "Error updating location:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Location List</h2>

      {loading && <p>Loading locations...</p>}
      {locations.length === 0 ? (
        <p>No locations found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-2">ID</th>
              <th className="border border-gray-700 p-2">Room No</th>
              <th className="border border-gray-700 p-2">Row No</th>
              <th className="border border-gray-700 p-2">Section</th>
              <th className="border border-gray-700 p-2">Container No</th>
              <th className="border border-gray-700 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id} className="bg-gray-800 text-center">
                <td className="border border-gray-700 p-2">{location.id}</td>

                {editingLocation === location.id ? (
                  <>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="number"
                        value={updatedData.room_no}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            room_no: e.target.value,
                          })
                        }
                        className="w-full p-1 bg-gray-700 text-white"
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="number"
                        value={updatedData.row_no}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            row_no: e.target.value,
                          })
                        }
                        className="w-full p-1 bg-gray-700 text-white"
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="text"
                        value={updatedData.section}
                        maxLength="1"
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            section: e.target.value,
                          })
                        }
                        className="w-full p-1 bg-gray-700 text-white"
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="number"
                        value={updatedData.container_no}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            container_no: e.target.value,
                          })
                        }
                        className="w-full p-1 bg-gray-700 text-white"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-700 p-2">
                      {location.room_no}
                    </td>
                    <td className="border border-gray-700 p-2">
                      {location.row_no}
                    </td>
                    <td className="border border-gray-700 p-2">
                      {location.section}
                    </td>
                    <td className="border border-gray-700 p-2">
                      {location.container_no}
                    </td>
                  </>
                )}

                <td className="border border-gray-700 p-2">
                  {editingLocation === location.id ? (
                    // <button
                    //   onClick={() => handleUpdateLocation(location.id)}
                    //   className="p-2 bg-green-600 rounded hover:bg-green-500"
                    // >
                    //   Save
                    // </button>
                    <button
                      onClick={() =>
                        handleUpdateLocation(location.id, updatedData)
                      }
                      className="p-2 bg-green-600 rounded hover:bg-green-500"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(location)}
                      className="p-2 bg-blue-600 rounded hover:bg-blue-500"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LocationList;
