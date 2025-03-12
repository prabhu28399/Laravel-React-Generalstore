import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/user";

// User Login API
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

// User Registration API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
