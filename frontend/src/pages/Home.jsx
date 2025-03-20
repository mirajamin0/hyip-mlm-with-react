// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken"); // Check if user is logged in

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Redirect logged-in users to dashboard
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container">
      <h1>Welcome to Our Platform</h1>
      <p>This is a modern investment platform.</p>
      <button onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
}

export default Home;
