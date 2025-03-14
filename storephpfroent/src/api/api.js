import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

// User Login API
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, userData, {
      headers: { "Content-Type": "application/json" },
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
    const response = await axios.post(`${BASE_URL}/user/register`, userData, {
      headers: { "Content-Type": "application/json" },
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

// Get User Profile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Logout User
export const logoutUser = async (token) => {
  try {
    await axios.post(`${BASE_URL}/logout`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
  }
};
