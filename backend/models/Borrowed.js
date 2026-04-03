const mongoose = require("mongoose");

const borrowedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  paidAmount: { type: Boolean, default: false },
  paidrecurring: { type: Boolean, default: false },
  duedate: { type: Date },
  interest: { type: Number, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  fixedAmount: { type: Number},
  

});

module.exports = mongoose.model("Borrowed", borrowedSchema);
