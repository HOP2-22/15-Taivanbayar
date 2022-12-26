const express = require("express");
const {
  getList,
  createComment,
  deleteComment,
} = require("../controller/comController");

const commentRouter = express.Router();

commentRouter
  .get("/comment", getList)
  .post("/comment/create", createComment)
  .delete("/comment/:id", deleteComment);

module.exports = commentRouter;
    