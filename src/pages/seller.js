import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SellerDashboard from "../components/Seller/Dashboard";
import NotFoundScreen from "../common/NotFoundScreen";
import Products from "../components/Seller/SellerComponents/Products";
import Manufacturers from "../components/Seller/SellerComponents/Manufacturers";
import Authors from "../components/Seller/SellerComponents/Authors";
import Orders from "../components/Seller/SellerComponents/Orders";

function SellerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/authors" element={<Authors />} />
        {/* <Route path="*" element={<NotFoundScreen />} /> */}
      </Routes>
    </>
  );
}

export default SellerRoutes;
