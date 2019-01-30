// import our Book model
const db = require("../models");
const text = require('textbelt');
// export a set of methods to edit and manipulate the Book collection
module.exports = {
  // find all books ("/api/book" => GET)
  getOrder: function(req, res) {
    db.Order
      .find({})
      .sort({date: -1})
      .limit(1)
      .then(dbComputerData => res.json(dbComputerData))
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
    console.log(req.body);
    db.Order
      .create(req.body)
      .then(dbOrderData => res.json(dbOrderData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  sendSMS: function (req, res) {
    console.log("SMS sending...");
    text.sendText("917-929-5945", "Textbelt says hello");
    res.json("SMS SENT");
  }

  // // create / insert new book ("/api/book" => POST)
  // create: function (req, res) {
  //   db.Computer
  //     .create(req.body)
  //     .then(dbComputerData => res.json(dbComputerData))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },
  // // update book information ("/api/book/:id" => PUT)
  // update: function (req, res) {
  //   db.Computer
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbComputerData => res.json(dbComputerData))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },
  // // to delete a book from the reading list ("/api/book/:id" => DELETE)
  // remove: function (req, res) {
  //   db.Computer
  //     .findById(req.params.id)
  //     .then(dbComputerData => dbComputerData.remove())
  //     .then(dbComputerData => res.json(dbComputerData))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },

  // // find a book by id ("/api/book/:id")
  // findById: function (req, res) {
  //   db.Computer
  //     .findById(req.params.id)
  //     .then(dbComputerData => res.json(dbComputerData))
  //     .catch(err => {
  //       console.log(err);
  //       res.status(422).json(err)
  //     });
  // },


}