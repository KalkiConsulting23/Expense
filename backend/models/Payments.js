const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  Payment_name: { type: String, required: true },
  Amount: { type: Number, required: true },
Pay_type: { type: String,
    enum: ["Daily", "Weekly", "Monthly"],
    default: "Monthly",
   },
  strt_date: { type: Date },
  Salary:[]
 
  

});

module.exports = mongoose.model("Payment", paymentSchema);
