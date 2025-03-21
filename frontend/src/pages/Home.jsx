// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import officeImg from "../assets/office.jpg";
import rulesImg from "../assets/rules.jpg";
import cooperationImg from "../assets/cooperation.jpg";
import instructionsImg from "../assets/instructions.jpg";
// Import SVG files as strings
import withdrawalIcon from "../assets/withdrawal.svg";
import rechargeIcon from "../assets/recharge.svg";
import teamsIcon from "../assets/teams.svg";
import invitationIcon from "../assets/invitation.svg";
function Home() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken"); // Check if user is logged in

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Redirect logged-in users to dashboard
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="home-container">
      {/* Top Action Menu */}
      <div className="top-action-menu">
        <Link to="/recharge" className="action-item">
          <img
            src={rechargeIcon}
            alt="Recharge"
            className="action-icon"
          />
          <span>Recharge</span>
        </Link>
        
        <Link to="/withdrawal" className="action-item">
          <img
            src={withdrawalIcon}
            alt="Withdrawal"
            className="action-icon"
          />
          <span>Withdrawal</span>
        </Link>
        
        <Link to="/teams" className="action-item">
          <img
            src={teamsIcon}
            alt="Teams"
            className="action-icon"
          />
          <span>Teams</span>
        </Link>
        
        <Link to="/invitation" className="action-item">
          <img
            src={invitationIcon}
            alt="Invitation"
            className="action-icon"
          />
          <span>Invitation</span>
        </Link>
      </div>
    {/* Main Content */}
    <div className="main-content">
      <h2 className="section-title">Platform introduction</h2>

      {/* Grid of Cards */}
      <div className="platform-grid">
        <PlatformCard
          imgSrc={officeImg}
          title="Platform profile"
          description="MALL is an intelligent cloud global order matching center."
        />
        <PlatformCard
          imgSrc={rulesImg}
          title="Platform rules"
          description="About recharge: [The platform will change the recharge system]."
        />
        <PlatformCard
          imgSrc={cooperationImg}
          title="Win-win cooperation"
          description="At MALL, we carry out win-win cooperation for all users."
        />
        <PlatformCard
          imgSrc={instructionsImg}
          title="Instructions for use"
          description="To celebrate the MALL membership surpassing..."
        />
      </div>

      {/* Example "No more" text at the bottom */}
      <div className="no-more">No more</div>
    </div>
  </div>
  );
}
// Reusable Card Component
function PlatformCard({ imgSrc, title, description }) {
  return (
    <div className="platform-card">
      <img src={imgSrc} alt={title} />
      <div className="platform-card-content">
        <h3 className="platform-card-title">{title}</h3>
        <p className="platform-card-desc">{description}</p>
      </div>
    </div>
  );
}

export default Home;
