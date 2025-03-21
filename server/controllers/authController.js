// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Your database pool

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate username and password formats (6-16 alphanumeric characters)
    if (!/^[A-Za-z0-9]{6,16}$/.test(username)) {
      return res.status(400).json({ message: "Invalid username format" });
    }
    if (!/^[A-Za-z0-9]{6,16}$/.test(password)) {
      return res.status(400).json({ message: "Invalid password format" });
    }

    // Check if username already exists
    const [existing] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await pool.query(
      "INSERT INTO users (username, password, role, balance, vipLevel) VALUES (?, ?, ?, ?, ?)",
      [username, hashedPassword, "user", 0, "New User"]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};
// controllers/authController.js (continued)
exports.loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find user by username
      const [rows] = await pool.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      if (rows.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const user = rows[0];
  
      // Compare the provided password with the stored hashed password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate JWT token (valid for 1 day)
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.json({ message: "Login successful", token });
    } catch (err) {
      console.error("Login Error:", err);
      res.status(500).json({ message: "Server Error" });
    }
  };
  