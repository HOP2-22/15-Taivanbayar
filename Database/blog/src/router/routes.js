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
  .get("/users", getUsers)
  .get("/user/:id", getSingleUser)
  .post("/user/create", createUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
    
module.exports = userRouter;
