// import express Router and the book controller
const router = require("express").Router();
const partController = require("../../controllers/part");

// Matches with "/api/computer"
router
  .route("/")
  .post(partController.createPart);

//FIND PARTS by tagId(ex. all, intel, amd, etc)
router
  .route("/cpu/:tagId")
  .get(partController.findCpusByTagId);
router
  .route("/ram/:tagId")
  .get(partController.findRamsByTagId);
router
  .route("/hdd/:tagId")
  .get(partController.findHddsByTagId);
router
  .route("/gpu/:tagId")
  .get(partController.findGpusByTagId);
router
  .route("/case/:tagId")
  .get(partController.findCasesByTagId);

module.exports = router;