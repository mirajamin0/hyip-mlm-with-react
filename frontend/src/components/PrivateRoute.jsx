// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Dummy authentication check; replace with your logic
function isAuthenticated() {
  // e.g. return Boolean(localStorage.getItem("authToken"));
  return false; // For demo, not authenticated by default
}

export default function PrivateRoute({ children }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    // Redirect to login page, preserving the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
