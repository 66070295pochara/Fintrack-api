const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {createTransaction, getTransactions} = require("../controllers/transactionController");



router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransactions);

module.exports = router;