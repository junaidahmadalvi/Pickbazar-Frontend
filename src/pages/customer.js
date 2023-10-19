import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerPortal from "../components/Customer";
import NotFoundScreen from "../common/NotFoundScreen";
import CustomerNavbar from "../components/Customer/CustomerNavbar";

function CustomerRoutes() {
  return (
    <>
      <CustomerNavbar />
      <Routes>
        <Route path="/portal" element={<CustomerPortal />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default CustomerRoutes;
