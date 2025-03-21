// src/router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Record from "./pages/Record";
import UserDashboard from "./pages/UserDashboard"; // Updated Dashboard page
import Login from "./pages/Login"; // New Login page
import PrivateRoute from "./components/PrivateRoute";
import Registration from "./pages/Registration";
import HelpPage from "./pages/Help";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/record" element={<Record />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<div>Page Not Found</div>} />
     <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default Router;