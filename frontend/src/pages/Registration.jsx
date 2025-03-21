import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Reuse the same CSS for a consistent look

// Helper function to generate a 4-digit random captcha
function generateCaptcha() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function Registration() {
  const navigate = useNavigate();

  // Form fields
  const [refferalCode, setRefferalCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  // Captcha-related states
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  // Refresh captcha every 15 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCaptcha(generateCaptcha());
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle form submission
  const handleRegistration =  async (e) => {
    e.preventDefault();

    // 1. Check if the entered verification code matches the captcha
    if (verificationCode !== captcha) {
      setError("Verification code does not match. Please try again.");
      return;
    }

    // 2. Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message);
        } else {
          // Registration successful, redirect to login page
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        setError("Registration failed. Please try again.");
      }
    };   
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Registration</h2>
        <form onSubmit={handleRegistration}>
         {/* Refferal Code */}
            <input          
                type="text"
                className="login-input"
                placeholder="Refferal Code (required)"
                value={refferalCode}
                onChange={(e) => setRefferalCode(e.target.value)}
                required
            />

            {/* Username */}
          <input
            type="text"
            className="login-input"
            placeholder="6-16 letters or numbers"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            className="login-input"
            placeholder="6-16 alphanumeric password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            className="login-input"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Verification Code Row */}
          <div className="verification-row">
            <input
              type="text"
              className="captcha-input"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <div className="captcha">{captcha}</div>
          </div>

          {/* Error Message */}
          {error && <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>}

          <button type="submit" className="login-button">
            Register
          </button>

          <div className="registration-link">
            <p>
              Already have an account?{" "}
              <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
