const express = require('express');
const { getLink, createLink, goLink } = require('../controller/linkControl');

const linkRouter = express.Router();

linkRouter.get('/', getLink).post('/', createLink).get("/:id", goLink)

module.exports = linkRouter