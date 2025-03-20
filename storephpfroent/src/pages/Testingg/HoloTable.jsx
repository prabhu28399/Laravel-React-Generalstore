import React from "react";

const HoloTable = () => {
  const data = [
    { id: 1, name: "Alex Turner", phone: "555-0123", amount: 299.99 },
    { id: 2, name: "Maya Chen", phone: "555-0456", amount: 149.5 },
    { id: 3, name: "Liam Woods", phone: "555-0789", amount: 499.0 },
    { id: 4, name: "Zara Kim", phone: "555-0101", amount: 89.95 },
    { id: 5, name: "Evan Ross", phone: "555-0234", amount: 199.99 },
  ];

  return (
    <div className="p-0 bg-gradient-to-b from-gray-900 to-blue-900">
      <table className="w-full border border-blue-400/30 shadow-[0_0_20px_rgba(0,191,255,0.3)] rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900/50 text-blue-200">
            <th className="p-4 font-mono text-sm">SYS_ID</th>
            <th className="p-4 font-mono text-sm">ENTITY</th>
            <th className="p-4 font-mono text-sm">COMM</th>
            <th className="p-4 font-mono text-sm">VALUE</th>
            <th className="p-4 font-mono text-sm">CONTROL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-blue-500/20 hover:bg-blue-800/10 transition-all"
            >
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoloTable;
