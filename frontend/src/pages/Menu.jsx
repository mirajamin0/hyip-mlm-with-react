// src/pages/Menu.jsx
import React, { useState } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav"; // Import BreadcrumbNav component
import "../styles/Menu.css";
import VipList1 from "../assets/viplist1.png";
import VipList2 from "../assets/viplist2.png";    
import VipList3 from "../assets/viplist3.png";    

function Menu() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    // Breadcrumb Navigation
 <div>
    <div>
      <BreadcrumbNav title="Menu" />  
    </div>
  <div className="menu-container">
    {/* Tab Navigation */}
    <div className="menu-tabs">
      <button
        className={`menu-tab ${activeTab === "all" ? "active" : ""}`}
        onClick={() => setActiveTab("all")}
      >
        All
      </button>
      <button
        className={`menu-tab ${activeTab === "vip1" ? "active" : ""}`}
        onClick={() => setActiveTab("vip1")}
      >
        VIP 1
      </button>
      <button
        className={`menu-tab ${activeTab === "vip2" ? "active" : ""}`}
        onClick={() => setActiveTab("vip2")}
      >
        VIP 2
      </button>
      <button
        className={`menu-tab ${activeTab === "vip3" ? "active" : ""}`}
        onClick={() => setActiveTab("vip3")}
      >
        VIP 3
      </button>
    </div>

    {/* Tab Content */}
    <div className="menu-cards">
      {activeTab === "all" && <AllTab />}
      {activeTab === "vip1" && <Vip1Tab />}
      {activeTab === "vip2" && <Vip2Tab />}
      {activeTab === "vip3" && <Vip3Tab />}
    </div>

    {/* Example "No more" text at the bottom */}
    <div className="no-more">No more</div>
  </div>
  </div>
  );      
}

export default Menu;

function AllTab() {
  return (
    <>
      {/* Card #1 */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              src={VipList1}  // Replace with your own image  
              alt="VipList" 
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/0900fc57-d84f-4338-99fa-c0c087a12815.jpeg"
              alt="Amazon"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Amazon</h3>
            <p className="menu-card-balance">Available balance: 20USDT-499USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">4%</span>
            </p>
 
          </div>
        </div>
      </div>

      {/* Card #2 */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              src={VipList2}  // Replace with your own image 
              alt="VipList-2"   
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/91eca016-11e5-49cd-a1e4-ebcad44a58aa.webp"
              alt="Alibaba"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Alibaba</h3>
            <p className="menu-card-balance">Available balance: 499USDT-899USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">8%</span>
            </p>
 
          </div>
        </div>
      </div>
      {/* Card #3 */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              src={VipList3}  // Replace with your own image 
              alt="VipList-3"   
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/61d2c414-af11-40f0-9878-5ff2664a8a15.png"
              alt="Ali Express"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Ali Express</h3>
            <p className="menu-card-balance">Available balance: 899USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">12%</span>
            </p>
 
          </div>
        </div>
      </div>
    </>
  );
}

function Vip1Tab() {
  return (
    <>
      {/* Similar structure for VIP1 products... */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
          <img 
              src={VipList1}  // Replace with your own image 
              alt="VipList-1"   
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/0900fc57-d84f-4338-99fa-c0c087a12815.jpeg"
              alt="Amazon"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Amazon</h3>
            <p className="menu-card-balance">Available balance: 20USDT-499USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">4%</span>
            </p>
 
          </div>
        </div>
      </div>
    </>
  );
}

function Vip2Tab() {
  return (
    <>
      {/* Similar structure for VIP2 products... */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img 
              src={VipList2}  // Replace with your own image 
              alt="VipList-2"   
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/91eca016-11e5-49cd-a1e4-ebcad44a58aa.webp"
              alt="Alibaba"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Alibaba</h3>
            <p className="menu-card-balance">Available balance: 499USDT-899USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">8%</span>
            </p>
 
          </div>
        </div>
      </div>
    </>
  );
}

function Vip3Tab() {
  return (
    <>
      {/* Similar structure for VIP3 products... */}
      <div className="menu-card">
        <div className="menu-card-row">
          <div className="menu-card-col-img">
          <img 
              src={VipList3}  // Replace with your own image 
              alt="VipList-3"   
            />
          </div>
        </div>
        <div className="menu-card-row">
          <div className="menu-card-col-img">
            <img
              className="menu-card-img-large"
              src="https://dy-photo.com/profile/2022/08/02/61d2c414-af11-40f0-9878-5ff2664a8a15.png"
              alt="Ali Express"
            />
          </div>
          <div className="menu-card-col-content">
            <h3 className="menu-card-title">Ali Express</h3>
            <p className="menu-card-balance">Available balance: 899USDT</p>
            <p className="menu-card-commission">
              <span>Commission</span> <span className="text-danger">12%</span>
            </p>
 
          </div>
        </div>
      </div>
    </>
  );
}