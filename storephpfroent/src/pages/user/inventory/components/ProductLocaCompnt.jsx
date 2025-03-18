import React from "react";

const ProductLocaCompnt = ({
  locations,
  loading,
  editingLocation,
  updatedData,
  setUpdatedData,
  handleEditClick,
  handleUpdateLocation,
}) => {
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

export default ProductLocaCompnt;
