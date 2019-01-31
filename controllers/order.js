// import our Book model
const db = require("../models");
const request = require('request');
require('dotenv').config();
// export a set of methods to edit and manipulate the Book collection
module.exports = {
  // find all books ("/api/book" => GET)
  getOrder: function(req, res) {
    db.Order
      .find({})
      .sort({date: -1})
      .limit(1)
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  getUserOrders: function(req, res) {
    db.Order
      .find({purchasedFlag : '1'})
      .sort({date: -1})
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  findAll: function(req, res) {
    // /api/book?title=harry+potter
    // req.query => {title: "harry potter"}
    db.Order
      .find(req.query)
      .sort({_id: -1})
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  findByUser: function(req, res) {
    db.Order
      .find({ price: {$lte : req.params.price}})
      .sort({date: -1})
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  createOrder: function (req, res) {
    //console.log(req.body);
    db.Order
      .create(req.body)
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  placeOrder: function(req, res) {
    req.body[0].purchasedFlag = '1';
    
    db.Order
    .findOneAndUpdate({ _id: req.body[0]._id }, req.body[0])
    .then(dbOrderData => {
      // console.log(req.body[0].custPhone);
      // console.log(dbOrderData.computer[0].price);
      request.post('https://textbelt.com/text', {
        form: {
          phone: `${req.body[0].custPhone}`,
          message: `
          [COMP-U-BUILT]

          Your Order Summary
          =====================
          Order ID: ${dbOrderData._id}

          Total Price: $${dbOrderData.computer[0].price}
          =====================
          
          Your package will be shipped within 24hours.

          Thank you for choosing COMP-U-BUILT.
          `,
          key: process.env.SMS_API_KEY
        },
      }, function(err, httpResponse, body) {
        if (err) {
          console.error('Error:', err);
          return;
        }
        console.log(JSON.parse(body));
      })
      res.json(dbOrderData)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  }
}