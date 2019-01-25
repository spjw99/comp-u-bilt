// import api routes and express router
const router = require("express").Router();
const computerRoutes = require("./computer");
const partRoutes = require("./part");

// prefix computer route endpoint with "/computer"
router.use("/computer", computerRoutes);
router.use("/part", partRoutes);

// export routes
module.exports = router;