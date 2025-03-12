import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../api/api"; // Import API function
import UserRegisterComponent from "../components/UserRegisterComponent"; // Import form component

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = React.useState("");

  const onSubmit = async (data) => {
    setMessage(""); // Clear previous message

    if (data.password !== data.password_confirmation) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser(data);
      setMessage("User registered successfully!");
      console.log("Success:", response);
      reset(); // Clear form fields after success
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <UserRegisterComponent
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      message={message}
      errors={errors}
      watch={watch}
    />
  );
};

export default UserRegister;
