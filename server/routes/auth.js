const express = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

const authRouter = express.Router()

authRouter.route("/login")
  .get((req, res) => {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("login")
  })
  .post(async (req, res) => {
    console.log(req.body)
    const userByEmail = await User.findOne({
      email: req.body.email,
    })
    if (!userByEmail) {
      console.error("Invalid user email")
      return res.redirect("/login")
    }
    const isInvalidPassword = ! await bcrypt.compare(req.body.password, userByEmail.password)
    if (isInvalidPassword) {
      console.error("Invalid user password")
      return res.redirect("/login")
    }
    res.redirect("/")
  })

authRouter.route("/register")
  .get((req, res) => {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("register")
  })
  .post(async (req, res) => {
    const userByEmail = await User.findOne({
      email: req.body.email,
    })
    if (userByEmail) {
      console.error("Email already registered")
      return res.render("register")
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      ...req.body,
      password: hashedPassword,
    })
    try {
      const result = await user.save()
      res.redirect("/")
    } catch(error) {
      console.error(error)
      res.render("register")
    }
  })

authRouter.post("/logout", (req, res) => {
  res.redirect("/login")
})

module.exports = authRouter
