const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
    try {
        
        const { type, amount, category } = req.body;

        const transaction = await Transaction.create({
            user: req.user.userId,
            type,
            amount,
            category
        });

        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.userId,
        });

        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


