import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NotFoundScreen from "./common/NotFoundScreen";

// import Customer from "./Customer";
import CustomerRoutes from "./pages/customer";
import AdminRoutes from "./pages/admin";
import SellerRoutes from "./pages/seller";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/seller/*" element={<SellerRoutes />} />
          <Route path="/customer/*" element={<CustomerRoutes />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
