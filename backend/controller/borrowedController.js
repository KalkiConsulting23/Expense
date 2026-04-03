// const Order = require("../models/Order");
// const OrderItem = require("../models/OrderItem");
// const SeedVariety = require("../models/SeedVariety");
// const SowingPlan = require("../models/SowingPlan");
// const SeedStock = require("../models/SeedStock");

// exports.createOrder = async (req, res) => {
//   try {
//     const { customer_name, delivery_date, items } = req.body;

//     const order = new Order({ customer_name, delivery_date });
//     await order.save();

//     const orderItems = await Promise.all(items.map(async (item) => {
//       const orderItem = new OrderItem({
//         order_id: order._id,
//         seed_variety_id: item.item,
//         quantity_g: item.qty
//       });
//       await orderItem.save();

//       // Auto calculate sowing
//       const variety = await SeedVariety.findById(item.item);
//       if (!variety) throw new Error("Seed variety not found");

//       const sowingDate = new Date(delivery_date);
//       sowingDate.setDate(sowingDate.getDate() - variety.growth_days);

//       const tray1010 = Math.ceil(item.qty / variety.out_1010_g);
//       const seedRequired = tray1010 * variety.seed_per_1010_g;

//       const sowingPlan = new SowingPlan({
//         order_item_id: orderItem._id,
//         sowing_date: sowingDate,
//         tray_1010_count: tray1010,
//         tray_1020_count: 0,
//         planned_output_g: tray1010 * variety.out_1010_g,
//         seed_required_g: seedRequired
//       });
//       await sowingPlan.save();

//       const SeedStock = require("../models/SeedStock");

//       // After order items creation
//       for (const item of items) {
//         let stock = await SeedStock.findOne({ seed_variety_id: item.seed_variety_id });

//         if (!stock || stock.total_quantity_g < item.quantity_g) {
//           return res.status(400).json({ error: "Insufficient seed stock!" });
//         }

//         stock.total_quantity_g -= item.quantity_g;
//         stock.last_updated = Date.now();
//         await stock.save();
//       }

//       return orderItem._id;
//     }));

//     order.items = orderItems;
//     await order.save();

//     res.status(201).json(order);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

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
