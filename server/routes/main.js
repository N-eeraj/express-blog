const express = require("express")

const mainRouter = express.Router()

mainRouter.get("/", (_req, res) => {
  const isAuthenticated = true
  const username = "John Doe"

  res.render("index", {
    isAuthenticated,
    username,
  })
})

mainRouter.get("/about", (_req, res) => {
  res.render("about")
})

mainRouter.get("/privacy", (_req, res) => {
  res.render("privacy")
})

mainRouter.get("/settings", (_req, res) => {
  res.render("settings")
})

module.exports = mainRouter
