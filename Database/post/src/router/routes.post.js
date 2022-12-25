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
  .get("/post", getList)
  .get("/user/:id?post", getListByUser)
  .get("/tag/:id/post", getListByTag)
  .get("/post/:id", getPostById)
  .post("/create/post", createPost)
  .put("/post/:id", updatePost)
  .delete("/post/:id", deletePost)

module.exports = postRouter;
