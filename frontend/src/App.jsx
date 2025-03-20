// src/App.jsx
import React from "react";
import Router from "./router"; // Import routes
import FooterNav from "./components/FooterNav"; // Bottom Navigation
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Router />
      <FooterNav /> {/* Navbar stays at the bottom */}
    </div>
  );
}

export default App;
