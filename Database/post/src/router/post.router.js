const express = require("express");
const {
  getList,
  getListByUser,
  getListByTag,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postControl");

const postRouter = express.Router();

postRouter
  .get("/", getList)
  .get("/:id", getPostById)
  .get("/tag/:id", getListByTag)
  .get("/user/:id", getListByUser)
  .post("/create", createPost)
  .put("/:id", updatePost)
  .delete("/:id", deletePost)

module.exports = postRouter;
