const express = require("express")

const authRouter = express.Router()

authRouter.route("/login")
  .get((req, res) => {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("login")
  })
  .post((req, res) => {
    console.log(req.body)
  })

authRouter.route("/register")
  .get((req, res) => {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("register")
  })
  .post((req, res) => {
    console.log(req.body)
  })

authRouter.post("/logout", (req, res) => {
  res.redirect("/login")
})

module.exports = authRouter
