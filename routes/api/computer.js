// import express Router and the book controller
const router = require("express").Router();
const computerController = require("../../controllers/computer");

// Matches with "/api/computer"
router
  .route("/")
  .get(computerController.findAll)
  .post(computerController.createComputer);

// Matches with "/api/computer/:id"
router
.route("/:price")
.get(computerController.findByPrice);

// Matches with "/api/computer/:id"
// router
//   .route("/:id")
//   .get(computerController.findById)
//   .put(computerController.update)
//   .delete(computerController.remove);



module.exports = router;