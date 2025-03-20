import React from "react";

const users = [
  {
    id: 1,
    name: "Adam Joe",
    email: "adamjoe@example.com",
    created_at: "2021-12-12",
    price: "$99",
    plan: "BASIC",
    color: "green",
  },
  {
    id: 2,
    name: "Jon Doe",
    email: "jhondoe@example.com",
    created_at: "2021-12-12",
    price: "$199",
    plan: "PERSONAL",
    color: "orange",
  },
  {
    id: 3,
    name: "Emily Chan",
    email: "emilychan@example.com",
    created_at: "2021-01-12",
    price: "$299",
    plan: "BUSINESS",
    color: "blue",
  },
];

const UserCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-5">
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-gradient-to-br from-blue-400 to-purple-600 text-white p-6 rounded-2xl w-80 shadow-xl"
          >
            <div
              className={`absolute -top-5 left-5 px-4 py-2 text-white font-bold rounded-md bg-${user.color}-500`}
            >
              {user.plan}
            </div>

            <div className="absolute -top-5 right-5 bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow">
              {user.price}
            </div>

            <p className="text-lg mt-8 font-semibold">{user.name}</p>
            <p className="text-sm text-gray-200">{user.email}</p>
            <p className="text-sm text-gray-300">
              Created on: {user.created_at}
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
            </ul>

            <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
