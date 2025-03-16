import React, { useEffect } from "react";
import { useInventory } from "../../../../context/InventoryContext.jsx";

const LocationList = () => {
  const { locations, loading } = useInventory();

  useEffect(() => {
    console.log("Locations Data:", locations);
  }, [locations]); // Debug API response

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Product Locations</h2>
      <table className="w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 p-2">Product ID</th>
            <th className="border border-gray-700 p-2">Room</th>
            <th className="border border-gray-700 p-2">Row</th>
            <th className="border border-gray-700 p-2">Section</th>
            <th className="border border-gray-700 p-2">Container</th>
          </tr>
        </thead>
        <tbody>
          {locations.length > 0 ? (
            locations.map((location) => (
              <tr key={location.id} className="border border-gray-700">
                <td className="p-2">{location.product_id}</td>
                <td className="p-2">{location.room_no}</td>
                <td className="p-2">{location.row_no}</td>
                <td className="p-2">{location.section}</td>
                <td className="p-2">{location.container_no}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-2 text-center">
                No location data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LocationList;
