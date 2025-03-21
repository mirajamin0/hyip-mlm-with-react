// src/components/BreadcrumbNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BreadcrumbNav.css";

function BreadcrumbNav({ title }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back one step in browser history
  };

  return (
    <div className="breadcrumb-nav">
      <button onClick={handleBack} className="breadcrumb-back-button">
        {/* Replace this text with an icon if you like */}
        &lt; 
      </button>
      <h1 className="breadcrumb-title">{title}</h1>
    </div>
  );
}

export default BreadcrumbNav;
