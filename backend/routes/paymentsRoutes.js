const express = require("express");
const router = express.Router();
const ctrl = require("../controller/paymentController");

router.post("/", function (req, res) {
    res.send("hello");
});
router.post("/create", ctrl.createPayment);
router.post("/allproject",ctrl.readPayment);
// router.post("/update/:id",ctrl.updateExpense);
// router.get("/:id", ctrl.getOrderById);
// router.put("/:id", ctrl.updateOrder);
// router.delete("/:id", ctrl.deleteOrder);

module.exports = router;
