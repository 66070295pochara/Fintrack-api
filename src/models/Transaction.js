const mongoose = require("mongoose");

const transaction = new mongoose.Schema ({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
   type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },
  amount: {
    type: String,
    require: true
  },category: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transaction);