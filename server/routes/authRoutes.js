// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Destructure the exports from authController
const { registerUser, loginUser } = require("../controllers/authController");

// Then use them
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;