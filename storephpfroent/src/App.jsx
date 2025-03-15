import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import UserIndex from "./pages/user/pages/UserIndex";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import UserCategory from "./pages/user/pages/UserCategory";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route
            path="/user/index"
            element={
              <PrivateRoute>
                <UserIndex />
              </PrivateRoute>
            }
          />
          <Route path="/user/category" element={<UserCategory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
