import React from "react";
import { Link } from "react-router-dom";
import "../styles/service.css";
import ServiceAgentImage from "../assets/service-agent.png"; // Replace with your own image
import BreadcrumbNav from "../components/BreadcrumbNav";
function Service() {
  return (
    // Breadcrumb Navigation
    <div>
      <BreadcrumbNav title="Service" />
    <div className="service-container">
      <div className="service-header">
        <img
          src={ServiceAgentImage}
          alt="Customer Service Agent"
          className="service-image"
        />
        <h1>Customer Service Center</h1>
        <p>Online customer service time 07:00 - 23:00 (UK)</p>
      </div>

      {/* List of service options */}
      <div className="service-list">
        {/* 1. External Link to Telegram */}
        <a
          href="https://t.me/YourTelegramUsername"   // Replace with your actual Telegram link
          target="_blank"
          rel="noopener noreferrer"
          className="service-item"
        >
          <span>Online customer service</span>
          <span className="arrow">&gt;</span>
        </a>

        {/* 2. Internal Link to Help page */}
        <Link to="/help" className="service-item">
          <span>Help</span>
          <span className="arrow">&gt;</span>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Service;
