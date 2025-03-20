import React from "react";
import { useCustomers } from "../../../context/kathabook/CustomersContext";
import { useContext } from "react";
import { CustomerDetailsContext } from "../../../context/kathabook/CustomerDetailsContext";

const CustomersList = () => {
  const { customers, loading } = useCustomers();
  const { setSelectedCustomerId } = useContext(CustomerDetailsContext);

  if (loading) {
    return <p className="p-4">Loading customers...</p>;
  }

  if (!customers || customers.length === 0) {
    return <p className="p-4">No customers found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Customers</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Customer ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedCustomerId(customer.id)}
              >
                <td className="border p-2 text-center">{customer.id}</td>
                <td className="border p-2">{customer.name}</td>
                <td className="border p-2">{customer.phone}</td>
                <td className="border p-2 text-right">
                  {customer.amount || 0}
                </td>
                <td className="border p-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    View Details
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

export default CustomersList;
