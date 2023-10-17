import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "./style.css";
function AdminDashboard() {
  return (
    <>
      <div className="container">
        <nav>
          <AdminNavbar />
        </nav>

        <main>
          <aside>
            <AdminSidebar />{" "}
          </aside>
          <section>
            <h1>Admin Dashboard</h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
