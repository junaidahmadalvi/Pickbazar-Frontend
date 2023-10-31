import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerPortal from "../components/Customer";
import NotFoundScreen from "../common/NotFoundScreen";
import CustomerNavbar from "../components/Customer/CustomerNavbar";
import CustomerOffers from "../components/Customer/offers.customer";
import CustomerShops from "../components/Customer/shops.customer";
import CustomerContacts from "../components/Customer/contacts.customer";
import CustomerFaq from "../components/Customer/faq.customer";
import CustomerProfile from "../components/Customer/profile.customer";

function CustomerRoutes() {
  return (
    <>
      <CustomerNavbar />
      <Routes>
        <Route path="/portal" element={<CustomerPortal />} />
        <Route path="/profile" element={<CustomerProfile />} />
        <Route path="/offers" element={<CustomerOffers />} />
        <Route path="/shops" element={<CustomerShops />} />
        <Route path="/faq" element={<CustomerFaq />} />
        <Route path="/contacts" element={<CustomerContacts />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default CustomerRoutes;
