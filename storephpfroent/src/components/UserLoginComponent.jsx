import React from "react";

const UserLoginComponent = ({ register, handleSubmit, message, errors }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-indigo-700 text-2xl font-semibold mb-6 text-center">
          Login
        </h2>

        {message && (
          <p className="text-center text-red-500 font-medium">{message}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLoginComponent;
