import React, { createContext, useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  getUserProfile,
  logoutUser,
} from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile when token is available
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (token) {
        try {
          const userProfile = await getUserProfile(token);
          setUser(userProfile);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          logout(); // Auto logout if the token is invalid or expired
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [token]);

  const login = async (userData) => {
    try {
      const response = await loginUser(userData);

      if (response.access_token) {
        // ✅ Correctly checking token existence
        setToken(response.access_token);
        localStorage.setItem("token", response.access_token);

        const userProfile = await getUserProfile(response.access_token);
        setUser(userProfile);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setToken(response.token);
      localStorage.setItem("token", response.token);

      const userProfile = await getUserProfile(response.token);
      setUser(userProfile);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
