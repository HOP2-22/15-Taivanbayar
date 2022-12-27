const express = require("express");
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/:id", getSingleUser)
  .post("/create", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = userRouter;
  