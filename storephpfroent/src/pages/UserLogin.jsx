import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserLoginComponent from "../pages/user/components/UserLoginComponent";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const UserLogin = () => {
  const { login } = useContext(AuthContext); // Get login function from AuthContext
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage(""); // Clear previous messages

    try {
      await login(data); // Call the login function from AuthContext
      setMessage("Login successful!");
      console.log("User logged in successfully!");

      reset(); // Clear form fields

      // Redirect after successful login
      navigate("/user/index");
    } catch (error) {
      console.error("Login error:", error);

      // Display proper error message
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <UserLoginComponent
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      message={message}
      errors={errors}
    />
  );
};

export default UserLogin;
