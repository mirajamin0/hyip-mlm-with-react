// src/components/FooterNav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaUser, FaList, FaHistory, FaBolt } from "react-icons/fa";

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 2px solid #ddd;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: ${({ $active }) => ($active ? "#007bff" : "#888")};

  svg {
    font-size: 20px;
    margin-bottom: 3px;
  }

  &:hover {
    color: #007bff;
  }
`;

function FooterNav() {
  const location = useLocation(); // Get current URL path

  return (
    <NavBar>
      <NavItem to="/" $active={location.pathname === "/"}>
        <FaHome />
        Home
      </NavItem>
      <NavItem to="/service" $active={location.pathname === "/service"}>
        <FaList />
        Service
      </NavItem>
      <NavItem to="/menu" $active={location.pathname === "/menu"}>
        <FaBolt />
        Menu
      </NavItem>
      <NavItem to="/record" $active={location.pathname === "/record"}>
        <FaHistory />
        Record
      </NavItem>
      <NavItem to="/dashboard" $active={location.pathname === "/dashboard"}>
        <FaUser />
        Dashboard
      </NavItem>
    </NavBar>
  );
}

export default FooterNav;
