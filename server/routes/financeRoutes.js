const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const { deposit, withdraw } = require("../controllers/financeController");
const router = express.Router();

// POST /api/finance/deposit
router.post("/deposit", verifyToken, deposit);

// POST /api/finance/withdraw
router.post("/withdraw", verifyToken, withdraw);

module.exports = router;
