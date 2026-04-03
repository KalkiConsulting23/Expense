const Expense = require("../models/Expense");


exports.createExpense = async (req, res) => {
  
    const { Expense_name, amount, recurring, startDate, endDate } = req.body;
   if(recurring==="One_Time"){

       var expense = new Expense({ Expense_name, amount, startDate, endDate});
    }else{
       var expense = new Expense({ Expense_name, amount,recurring:{active:true}, startDate,endDate});

   }
    await expense.save();

   res.status(201).json(expense);

      // Auto calculate sowing
    
      
      

      // After order items creation
      

    
   
};
exports.readExpense=async(req,res)=>{
    var data=await Expense.find();
    res.json(data);
}
// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate({
//       path: "items",
//       populate: { path: "seed_variety_id" }
//     });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate({
//       path: "items",
//       populate: { path: "seed_variety_id" }
//     });
//     if (!order) return res.status(404).json({ error: "Not found" });
//     res.json(order);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateOrder = async (req, res) => {
//   try {
//     const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteOrder = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).json({ error: "Not found" });

//     await OrderItem.deleteMany({ order_id: order._id });
//     await SowingPlan.deleteMany({ order_item_id: { $in: order.items } });
//     await order.deleteOne();

//     res.json({ message: "Order deleted" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
