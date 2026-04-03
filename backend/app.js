const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/seed-varieties", require("./routes/seedVarietyRoutes"));
app.use("/api/expense", require("./routes/expenseRoutes"));
// app.use("/api/order-items", require("./routes/orderItemRoutes"));
// app.use("/api/sowing-plans", require("./routes/sowingPlanRoutes"));
// app.use("/api/reports", require("./routes/reportRoutes"));
// app.use("/api/customers", require("./routes/customerRoutes"));
// app.use("/api/seed-stock", require("./routes/seedStockRoutes"));
// app.use("/api/raw-material-stock",  require("./routes/rawMaterialStockRoutes"));
// app.use("/api/auth", authRoutes);

module.exports = app;

