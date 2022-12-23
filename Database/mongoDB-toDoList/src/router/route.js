const express = require("express");
const { createLists, showLists, deleteItems, updateItems } = require("../controller/dataList");
const router = express.Router();

router
  .post("/", createLists)
  .get("/", showLists)
  .delete("/", deleteItems)
  .patch("/", updateItems);

module.exports = router;
