const express = require("express")

const authRouter = express.Router()

authRouter.get("/login", (_req, res) => {
  res.render("login")
})

authRouter.get("/register", (_req, res) => {
  res.render("register")
})

module.exports = authRouter
