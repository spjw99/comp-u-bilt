// import express Router and the order controller
const router = require("express").Router();
const orderController = require("../../controllers/order");
// Matches with "/api/order"
router
    .route("/")
    .get(orderController.getOrder);
router
    .route("/getUserOrders")
    .get(orderController.getUserOrders); 
router
    .route("/placeOrder")
    .post(orderController.placeOrder); 


module.exports = router;