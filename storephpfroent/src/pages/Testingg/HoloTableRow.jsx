import React from "react";

const HoloTableRow = ({ row }) => {
  return (
    <tr className="border-t border-blue-500/20 hover:bg-blue-800/10 transition-all">
      <td className="p-4 text-blue-400">{row.id}</td>
      <td className="p-4 text-white animate-pulse">{row.name}</td>
      <td className="p-4 text-blue-300/80">{row.phone}</td>
      <td className="p-4 text-yellow-300">${row.amount}</td>
      <td className="p-4 flex gap-2">
        <button className="px-3 py-1 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all">
          Update
        </button>
        <button className="px-3 py-1 bg-transparent border border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-all">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default HoloTableRow;
