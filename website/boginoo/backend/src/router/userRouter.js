const express = require('express');
const { createUser, getUsers, Login } = require('../controller/userControl');
const { authenticateToken } = require('../middleware/verifying');

const userRouter = express.Router();

userRouter.get("/", authenticateToken, getUsers).post("/signup", createUser ).post("/login", Login)

module.exports = userRouter;