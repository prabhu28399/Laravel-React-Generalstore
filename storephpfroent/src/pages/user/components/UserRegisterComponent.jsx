import React from "react";

const UserRegisterComponent = ({ register, handleSubmit, message, errors }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-indigo-700 text-2xl font-semibold mb-6 text-center">
          Register
        </h2>

        {message && (
          <p className="text-center text-red-500 font-medium">{message}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Shop Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Shop Name
            </label>
            <input
              type="text"
              {...register("shopname", { required: "Shop name is required" })}
              placeholder="Enter shop name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.shopname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.shopname.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("password_confirmation", {
                required: "Confirm Password is required",
              })}
              placeholder="Confirm password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterComponent;
