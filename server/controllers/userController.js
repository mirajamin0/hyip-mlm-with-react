// controllers/userController.js
const pool = require("../config/db");

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // from decoded token
    const [rows] = await pool.query("SELECT id, username, role, balance, vipLevel FROM users WHERE id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Profile Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.updateVipLevel = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { vipLevel } = req.body; // e.g., "VIP 1", "VIP 2"
    // Optionally check if role is "admin" or if user can update their own VIP
    // For now, just allow updating
    await pool.query("UPDATE users SET vipLevel = ? WHERE id = ?", [vipLevel, userId]);
    res.json({ message: "VIP level updated", vipLevel });
  } catch (err) {
    console.error("VIP Update Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
  
};
