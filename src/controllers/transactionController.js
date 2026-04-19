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
       const userId = req.user.userId;
       const { type } = req.query;
       let filter = {
         user : userId
        };
        if (type) {
            filter.type = type;
        }
        const transactions = await Transaction.find(filter).sort({ createdAt: -1 });
         res.json(transactions);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getSummary = async (req, res) => {
    try {
        const userId = req.user.userId;
        const transaction = await Transaction.find({ user: userId });

        let income = 0;
        let expense = 0;

        transaction.forEach((i) => {
            if (i.type == "income") {
                income += i.amount;
            } else {
                expense += i.amount;
            }
        });

        res.json({
            income,
            expense,
            balance: income - expense,
        });
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, amount, category } = req.body;
        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        if (transaction.user.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Forbidden" });
        }

        transaction.type = type || transaction.type;
        transaction.amount = amount || transaction.amount;
        transaction.category = category || transaction.category;

        await transaction.save();

        res.json({ message: "Transaction updated", transaction });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    if (transaction.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await transaction.deleteOne();

    res.json({ message: "Transaction deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};