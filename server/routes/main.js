const express = require("express")

const mainRouter = express.Router()

mainRouter.get("/", (_req, res) => {
  res.render("index")
})

mainRouter.get("/about", (_req, res) => {
  res.render("about")
})

mainRouter.get("/privacy", (_req, res) => {
  res.render("privacy")
})

module.exports = mainRouter
