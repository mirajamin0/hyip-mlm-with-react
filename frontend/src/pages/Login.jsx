// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function generateCaptcha() {
  // Returns a 4-digit random number as a string
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [remember, setRemember] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  useEffect(() => {
    // Update captcha every 15 seconds
    const intervalId = setInterval(() => {
      setCaptcha(generateCaptcha());
    }, 15000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered verification code matches the captcha
    if (verificationCode !== captcha) {
      setError("Verification code does not match. Please try again.");
      return;
    }

    // Clear error if matched and proceed with login logic
    setError("");
    console.log("Login attempt:", { username, password, remember });
    // TODO: Implement your actual login logic here
    // On success: navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="6-16 letters or numbers"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            className="login-input"
            placeholder="6-16 alphanumeric password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Verification Code Row */}
          <div className="verification-row">
            <input
              type="number"
              className="captcha-input"
              placeholder="Enter the code above"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <span className="captcha">{captcha}</span>
          </div>

          {/* Options Row */}
          <div className="options-row">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              &nbsp; Remember password
            </label>
            <a href="/forgot-password">Forgot password</a>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="registration-link">
            <a href="/registration">Registration</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
