// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up book schema
const orderSchema = new Schema({
  userId: {type: String, default: 0},
  orderId: {type: String},
  custName: {type: String},
  custShipAddr: {type: String},
  custPhone: {type: String},
  custCard: {type: String},
  purchasedFlag: {type: String, default: 0},
  computer: {type: Array},
  date: {
    type: Date,
    default: Date.now
  }
});

// create order model using schema
const Order = mongoose.model("Order", orderSchema);

// export model
module.exports = Order;
