import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import UserIndex from "./pages/user/pages/UserIndex";
import UserHeader from "./pages/user/sections/UserHeader.jsx";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <HeaderWrapper />
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Wrapper for UserHeader that updates dynamically based on authentication state
const HeaderWrapper = () => {
  const { user } = useContext(AuthContext);
  return user ? <UserHeader /> : null; // Only render UserHeader if user is logged in
};

export default App;
