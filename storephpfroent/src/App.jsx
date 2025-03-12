import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import Uindex from "./pages/user/Uindex";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />

        <Route path="/user/index" element={<Uindex />} />
      </Routes>
    </Router>
  );
}

export default App;
