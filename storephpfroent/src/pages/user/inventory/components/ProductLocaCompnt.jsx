import React from "react";

const ProductLocaCompnt = ({ locations }) => {
  return (
    <div className="container my-10 mx-auto p-4">
      {locations.length > 0 ? (
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr className="text-gray-700">
              <th className="border p-2">Product ID</th>
              <th className="border p-2">Room</th>
              <th className="border p-2">Row</th>
              <th className="border p-2">Section</th>
              <th className="border p-2">Container</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr
                key={location.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border p-2">{location.product_id}</td>
                <td className="border p-2">{location.room_number}</td>
                <td className="border p-2">{location.row_number}</td>
                <td className="border p-2">{location.section}</td>
                <td className="border p-2">{location.container_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No locations found.</p>
      )}
    </div>
  );
};

export default ProductLocaCompnt;
