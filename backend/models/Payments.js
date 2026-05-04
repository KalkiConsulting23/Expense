const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
payType: { type: String,
    enum: ["Daily", "Weekly", "Monthly"],
    default: "Monthly",
   },
  startDate: { type: Date },
  Salary:{type:Array}
 
  

});

module.exports = mongoose.model("Payment", paymentSchema);
