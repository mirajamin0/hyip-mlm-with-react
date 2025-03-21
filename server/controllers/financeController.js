// controllers/financeController.js
const pool = require("../config/db");

exports.deposit = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount } = req.body; // e.g., { amount: 100 }

    // Insert deposit record (status = 'pending' or 'manual_approval')
    await pool.query(
      "INSERT INTO transactions (userId, type, amount, status) VALUES (?, ?, ?, ?)",
      [userId, "deposit", amount, "pending"]
    );

    res.json({ message: "Deposit request submitted" });
  } catch (err) {
    console.error("Deposit Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.withdraw = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount } = req.body;

    // Insert withdrawal record (status = 'pending')
    await pool.query(
      "INSERT INTO transactions (userId, type, amount, status) VALUES (?, ?, ?, ?)",
      [userId, "withdraw", amount, "pending"]
    );

    res.json({ message: "Withdrawal request submitted" });
  } catch (err) {
    console.error("Withdraw Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
};
