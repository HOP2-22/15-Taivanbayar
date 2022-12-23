const express = require("express");
const { getList } = require("../controller/postControl");

const postRouter = express.Router();

postRouter.get("/post", getList);

module.exports = postRouter;
