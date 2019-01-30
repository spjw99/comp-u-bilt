// import express Router and the order controller
const router = require("express").Router();
const orderController = require("../../controllers/order");
// Matches with "/api/order"
router
    .route("/")
    .get(orderController.getOrder);
router
    .route("/sms")
    .post(orderController.sendSMS); 

module.exports = router;