// import api routes and express router
const router = require("express").Router();
const computerRoutes = require("./computer");
const partRoutes = require("./part");
const orderRoutes = require("./order");

// prefix computer route endpoint with "/computer"
router.use("/computer", computerRoutes);
router.use("/part", partRoutes);
router.use("/order", orderRoutes);

// export routes
module.exports = router;