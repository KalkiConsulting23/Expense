const Payments = require("../models/Payments");


exports.createPayment = async (req, res) => {
  
    const { Payment_name, Amount, Pay_type, strt_date} = req.body;
  
       var Payment = new Payments({ Payment_name, Amount,Pay_type ,strt_date});
    
    await Payment.save();

   res.status(201).json(Payment);

      // Auto calculate sowing
    
      
      

      // After order items creation
      

    
   
};
exports.readPayment=async(req,res)=>{
    var data=await Payments.find();
    res.json(data);
}
exports.updatePayment=async(req,res)=>{
    var data=await Payments.findById(req.params.id);
    var {Amount,pay_date}=req.body;
    data.Salary.push({"Amount":Amount,"Pay_type":data.Pay_type,"pay_date":pay_date});
    await data.save();
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
