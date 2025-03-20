// import React, { memo } from "react";
// import { useContext } from "react";
// import { CustomerDetailsContext } from "../../../../context/kathabook/CustomerDetailsContext";

// const CustomerDetailsList = () => {
//   const { customerDetails } = useContext(CustomerDetailsContext);

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-semibold">Customer Transactions</h2>
//       {customerDetails.length === 0 ? (
//         <p className="text-gray-500">No transactions available.</p>
//       ) : (
//         <ul className="mt-2">
//           {customerDetails.map((detail) => (
//             <li key={detail.id} className="p-2 border rounded-md">
//               <p>💰 You Gave: ₹{detail.you_gave || 0}</p>
//               <p>💵 You Got: ₹{detail.you_got || 0}</p>
//               {detail.note && <p>📝 Note: {detail.note}</p>}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomerDetailsList;
