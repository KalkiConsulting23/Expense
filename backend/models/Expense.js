const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  Expense_name: { type: String, required: true },
  amount: { type: Number, required: true },
  payments: [{
    paid: { type: Number, required: true },
    month: { type: String, required: true },
    remain: { type: Number, required: true },
  }],
  recurring: {
    active: { type: Boolean, default: false },
      recurstartDate: { type: Date, default: null},
      recurendDate: { type: Date, default: null},
      recuuringDate: { type: Date, default: null},
    },
  
  endDate: { type: Date },
  startDate: { type: Date},
  expenseType: { type: String,
     type: String,
    enum: ["Salary", "Loan","Other", "Office", "Home"],
    default: "Other",
   },

});

module.exports = mongoose.model("Expense", expenseSchema);
