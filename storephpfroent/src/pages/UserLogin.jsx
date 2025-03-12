import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { loginUser } from "../api/api"; // Import API function
import UserLoginComponent from "../components/UserLoginComponent"; // Import form component

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate(); // Initialize navigation hook
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage(""); // Clear previous messages

    try {
      const response = await loginUser(data);
      setMessage("Login successful!");
      console.log("User logged in:", response);

      reset(); // Clear form fields after success

      // Redirect to User Index Page
      navigate("/user/Index");
    } catch (error) {
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
