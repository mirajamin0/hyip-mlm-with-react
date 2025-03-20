// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("authToken", "user123"); // Simulate login
    navigate("/dashboard"); // Redirect after login
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <p>Please log in to access your account.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
