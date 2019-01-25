// import our Book model
const db = require("../models");

// export a set of methods to edit and manipulate the Book collection
module.exports = {
  // find all books ("/api/book" => GET)
  findAll: function(req, res) {
    // /api/book?title=harry+potter
    // req.query => {title: "harry potter"}
    db.Computer
      .find(req.query)
      .sort({_id: -1})
      .then(dbComputerData => res.json(dbComputerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  findByPrice: function(req, res) {
    db.Computer
      .find({ price: {$lte : req.params.price}})
      .sort({date: -1})
      .then(dbComputerData => res.json(dbComputerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  createComputer: function (req, res) {
    console.log(req.body);
    db.Computer
      .create(req.body)
      .then(dbComputerData => res.json(dbComputerData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
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