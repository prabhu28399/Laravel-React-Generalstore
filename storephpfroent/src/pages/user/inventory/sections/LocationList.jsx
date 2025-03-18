import React, { useEffect, useContext } from "react";
import { useLocation } from "../../../../context/inventory/LocationContext";
import { AuthContext } from "../../../../context/AuthContext";

const LocationList = () => {
  const { user, token } = useContext(AuthContext);
  const { locations, fetchLocations, loading } = useLocation();

  useEffect(() => {
    if (token) {
      fetchLocations();
    }
  }, [token]);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Location List</h2>

      {/* Loading State */}
      {loading ? (
        <p>Loading locations...</p>
      ) : locations.length === 0 ? (
        <p>No locations found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              {/* <th className="border border-gray-700 p-2">ID</th> */}
              <th className="border border-gray-700 p-2">Product ID</th>
              <th className="border border-gray-700 p-2">Room No</th>
              <th className="border border-gray-700 p-2">Row No</th>
              <th className="border border-gray-700 p-2">Section</th>
              <th className="border border-gray-700 p-2">Container No</th>
              {/* <th className="border border-gray-700 p-2">User ID</th> */}
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id} className="bg-gray-800 hover:bg-gray-700">
                {/* <td className="border border-gray-700 p-2">{location.id}</td> */}
                <td className="border border-gray-700 p-2">
                  {location.product_id}
                </td>
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

                {/* <td className="border border-gray-700 p-2">
                  {location.user_id}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LocationList;
