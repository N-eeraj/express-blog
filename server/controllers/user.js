const bcrypt = require("bcryptjs")
const User = require("../models/User")

class UserController {
  static loginView(req, res) {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("login")
  }

  static async login(req, res) {
    const userByEmail = await User.findOne({
      email: req.body.email,
    })
    if (!userByEmail) {
      return res.render("login", {
        error: {
          email: "Invalid email",
        },
      })
    }
    const isInvalidPassword = ! await bcrypt.compare(req.body.password, userByEmail.password)
    if (isInvalidPassword) {
      return res.render("login", {
        error: {
          message: "Invalid email or password",
        },
      })
    }
    res.redirect("/")
  }

  static registerView(req, res) {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("register")
  }

  static async register(req, res) {
    const userByEmail = await User.findOne({
      email: req.body.email,
    })
    if (userByEmail) {
      return res.render("register", {
        error: {
          email: "Email already registered",
        },
      })
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
      res.render("register", {
        error: {
          message: "Oops! Something went wrong"
        },
      })
    }
  }

  static async logout(req, res) {
    res.redirect("/login")
  }
}

module.exports = UserController
