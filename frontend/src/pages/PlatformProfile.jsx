// src/pages/PlatformProfile.jsx
import React from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

function PlatformProfile() {
  return (
    <div>
      {/* Only this page has a breadcrumb with a back button */}
      <BreadcrumbNav title="Platform profile" />
      
      <div className="container" style={{ padding: "1rem" }}>
        <p>Platform profile content goes here...</p>
      </div>
    </div>
  );
}

export default PlatformProfile;
