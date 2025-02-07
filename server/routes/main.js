const express = require("express")
const renderWithAuthData = require("../../src/helper/renderWithAuthData")

const mainRouter = express.Router()

mainRouter.get("/", (req, res) => {
  renderWithAuthData(req, res, "index")
})

mainRouter.get("/about", (req, res) => {
  renderWithAuthData(req, res, "about")
})

mainRouter.get("/privacy", (req, res) => {
  renderWithAuthData(req, res, "privacy")
})

mainRouter.get("/settings", (req, res) => {
  renderWithAuthData(req, res, "settings")
})

module.exports = mainRouter
