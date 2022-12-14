const express = require("express");
const { getUsers, createUsers, updateUsers } = require("../controller/users");
const router = express.Router();

router.get("/users", getUsers).post("/users", createUsers).put("/users", updateUsers);

module.exports = router;
