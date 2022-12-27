const express = require("express");
const {
  getList,
  createComment,
  deleteComment,
  getListByPost,
  getListByUserComment,
} = require("../controller/comController");

const commentRouter = express.Router();

commentRouter
  .get("/", getList)
  .get("/post/:id", getListByPost)
  .get("/user/:id", getListByUserComment)
  .post("/create", createComment)
  .delete("/:id", deleteComment);

module.exports = commentRouter;
    