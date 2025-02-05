const express = require("express")

const authRouter = express.Router()

authRouter.route("/login")
  .get((_req, res) => {
    res.render("login")
  })
  .post((req, res) => {
    console.log(req.body)
  })

authRouter.get("/register", (_req, res) => {
  res.render("register")
})

module.exports = authRouter
