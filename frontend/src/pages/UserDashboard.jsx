// src/pages/UserDashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken"); // Check if logged in

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are logged in!</p>
    </div>
  );
}

export default UserDashboard;
