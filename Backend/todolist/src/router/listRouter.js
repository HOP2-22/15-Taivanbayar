const express = require("express");
const {
  createList,
  getList,
  updateList,
  deleteList,
  deleteAll,
} = require("../controller/listControl");

const listRouter = express.Router();

listRouter
  .post("/", createList)
  .get("/", getList)
  .put("/:id", updateList)
  .delete("/:id", deleteList)
  .delete("/delete", deleteAll);

module.exports = listRouter;
