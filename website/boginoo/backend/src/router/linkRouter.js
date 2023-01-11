const express = require("express");
const { getLink, createLink, goLink } = require("../controller/linkControl");

const linkRouter = express.Router();

const middleware = (req, res, next) => {
  const isIsMyTicket = req.body.ticket;
  if(isIsMyTicket) {
      next();
  } else {
      res.send("You haven't logged in yet")
  }
};

linkRouter.get("/", middleware, getLink).post("/", createLink).get("/:id", goLink);

module.exports = linkRouter;
