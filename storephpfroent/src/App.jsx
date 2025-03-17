import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import UserIndex from "./pages/user/pages/UserIndex";
import PrivateRoute from "./components/PrivateRoute";

// context
import { AuthProvider } from "./context/AuthContext";
// import { UserProvider } from "./context/UserContext";
// Inventory context's
import { CategoryProvider } from "./context/inventory/CategoryContext";
// import { LocationProvider } from "./context/inventory/LocationContext";
import { ProductProvider } from "./context/inventory/ProductContext";
// import { StockProvider } from "./context/inventory/StockContext";

import InventoryCategory from "./pages/user/pages/InventoryCategory";
import InventoryLocations from "./pages/user/pages/InventoryLocations";
import InventoryProducts from "./pages/user/pages/InventoryProducts";
import InventoryStocks from "./pages/user/pages/InventoryStocks";

function App() {
  return (
    <AuthProvider>
      {/* <UserProvider> */}
      <CategoryProvider>
        {/* <LocationProvider> */}
        <ProductProvider>
          {/* <StockProvider> */} {/* ✅ Fixed Provider Wrapping */}
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

              {/* Inventory Routes */}
              <Route
                path="/inventory/category"
                element={<InventoryCategory />}
              />
              <Route
                path="/inventory/location"
                element={<InventoryLocations />}
              />
              <Route
                path="/inventory/product"
                element={<InventoryProducts />}
              />
              <Route path="/inventory/stock" element={<InventoryStocks />} />
            </Routes>
          </Router>
          {/* </StockProvider> */} {/* ✅ Closed StockProvider Correctly */}
        </ProductProvider>
        {/* </LocationProvider> */}
      </CategoryProvider>
      {/* </UserProvider> */}
    </AuthProvider>
  );
}

export default App;
// import { useCategory } from "../../../../context/inventory/CategoryContext"; // ✅ Using Category Context
