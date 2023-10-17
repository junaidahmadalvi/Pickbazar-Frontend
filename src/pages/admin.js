import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "../components/Admin/Dashboard";
import Users from "../components/Admin/AdminComponents/Users";
import Shops from "../components/Admin/AdminComponents/Shops";
import Products from "../components/Admin/AdminComponents/Products";
import Categories from "../components/Admin/AdminComponents/Categories";
import Groups from "../components/Admin/AdminComponents/Groups";
import Manufacturers from "../components/Admin/AdminComponents/Manufacturers";
import Authors from "../components/Admin/AdminComponents/Authors";
import Orders from "../components/Admin/AdminComponents/Orders";
import NotFoundScreen from "../common/NotFoundScreen";
import AdminNavbar from "../components/Admin/Dashboard/AdminNavbar";
// import AdminSidebar from "../components/Admin/Dashboard/AdminSidebar";

function AdminRoutes() {
  return (
    <>
      {/* <AdminNavbar /> */}
      {/* <AdminSidebar /> */}
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default AdminRoutes;

// function AdminRoutes() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<AdminDashboard />} />
//         <Route path="/shops" element={<Shops />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/groups" element={<Groups />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/manufacturers" element={<Manufacturers />} />
//         <Route path="/authors" element={<Authors />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="*" element={<NotFoundScreen />} />
//       </Routes>
//     </>
//   );
// }
