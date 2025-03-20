import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DelSample = () => {
  const tableData = [
    {
      id: 1,
      name: "Adam joe",
      email: "adamjoe@example.com",
      created_at: "2021-12-12",
    },
    {
      id: 2,
      name: "Jon doe",
      email: "jhondoe@example.com",
      created_at: "2021-12-12",
    },
    {
      id: 3,
      name: "Emily chan",
      email: "emilychan@example.com",
      created_at: "2021-1-12",
    },
    {
      id: 4,
      name: "susan coby",
      email: "susancoby@example.com",
      created_at: "2021-1-12",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                ID
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Email
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Created_at
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Edit
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-300">{row.id}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {row.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {row.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {row.created_at}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DelSample;
