import React from "react";
import HoloTableRow from "./HoloTableRow";

const HoloTableComponent = () => {
  const data = [
    { id: 1, name: "Alex Turner", phone: "555-0123", amount: 299.99 },
    { id: 2, name: "Maya Chen", phone: "555-0456", amount: 149.5 },
    { id: 3, name: "Liam Woods", phone: "555-0789", amount: 499.0 },
    { id: 4, name: "Zara Kim", phone: "555-0101", amount: 89.95 },
    { id: 5, name: "Evan Ross", phone: "555-0234", amount: 199.99 },
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen">
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
            <HoloTableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoloTableComponent;
