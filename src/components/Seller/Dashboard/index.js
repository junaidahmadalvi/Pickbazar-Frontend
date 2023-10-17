import React from "react";
import SellerSidebar from "./SellerSidebar";
import SellerNavbar from "./SellerNavbar";
import "./style.css";
function SellerDashboard() {
  return (
    <>
      <div className="container">
        <nav>
          <SellerNavbar />
        </nav>

        <main>
          <aside>
            <SellerSidebar />{" "}
          </aside>
          <section>
            <h1>Seller Dashboard</h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default SellerDashboard;
