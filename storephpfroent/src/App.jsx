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

// kathabook context's
// import { CustomersProvider } from "./context/kathabook/CustomersContext";
// import { PaymentsProvider } from "./context/kathabook/PaymentsContext";
// import { TransactionsProvider } from "./context/kathabook/TransactionsContext";
// import { ReportsProvider } from "./context/kathabook/ReportsContext";
import { CustomerDetailsProvider } from "./context/kathabook/CustomerDetailsContext";
import { CustomersProvider } from "./context/kathabook/CustomersContext";
// Inventory context's
import { CategoryProvider } from "./context/inventory/CategoryContext";
import { LocationProvider } from "./context/inventory/LocationContext";
import { ProductProvider } from "./context/inventory/ProductContext";
import { StockProvider } from "./context/inventory/StockContext";

import InventoryCategory from "../src/pages/inventory/pages/InventoryCategory";
import InventoryLocations from "../src/pages/inventory/pages/InventoryLocations";
import InventoryProducts from "../src/pages/inventory/pages/InventoryProducts";
import InventoryStocks from "../src/pages/inventory/pages/InventoryStocks";

// kathabook pages
import KathabookCustomerDetails from "../src/pages/kathabook/pages/KathabookCustomerDetails";
import KathabookCustomers from "../src/pages/kathabook/pages/KathabookCustomers";

// Testing page
import TestingPage from "./pages/Testingg/TestingPage";

function App() {
  return (
    <AuthProvider>
      <CustomersProvider>
        <CustomerDetailsProvider>
          <CategoryProvider>
            <LocationProvider>
              <ProductProvider>
                <StockProvider>
                  {/* ✅ Fixed Provider Wrapping */}
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
                      <Route
                        path="/inventory/stock"
                        element={<InventoryStocks />}
                      />

                      {/* kathabook routes  */}
                      <Route
                        path="/kathabook/customers"
                        element={<KathabookCustomers />}
                      />
                      <Route
                        path="/kathabook/customerdetails/:id"
                        element={<KathabookCustomerDetails />}
                      />

                      {/* testing route  */}
                      <Route path="/testing" element={<TestingPage />} />
                    </Routes>
                  </Router>
                </StockProvider>
                {/* ✅ Closed StockProvider Correctly */}
              </ProductProvider>
            </LocationProvider>
          </CategoryProvider>
        </CustomerDetailsProvider>
      </CustomersProvider>
    </AuthProvider>
  );
}

export default App;
