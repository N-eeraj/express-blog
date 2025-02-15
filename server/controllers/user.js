const bcrypt = require("bcryptjs")
const User = require("../models/User")
const renderSettings = require("../../src/helpers/renderSettings")

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
      res.statusCode = 401
      return res.render("login", {
        errors: {
          message: "Invalid email or password",
        },
      })
    }
    const isInvalidPassword = ! await bcrypt.compare(req.body.password, userByEmail.password)
    if (isInvalidPassword) {
      res.statusCode = 401
      return res.render("login", {
        errors: {
          message: "Invalid email or password",
        },
      })
    }
    req.session.user = userByEmail
    res.redirect("/")
  }

  static registerView(req, res) {
    if (req.isAuthenticated) {
      res.redirect("/")
    }
    res.render("register")
  }

  static async register(req, res) {
    if (req.body.password.length < 6) {
      return res.render("register", {
        errors: {
          password: "Please enter a longer password",
        },
      })
    }
    const userByEmail = await User.findOne({
      email: req.body.email,
    })
    if (userByEmail) {
      return res.render("register", {
        errors: {
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
      const userResult = await user.save()
      req.session.user = userResult
      res.redirect("/")
    } catch(error) {
      res.render("register", {
        errors: {
          message: "Oops! Something went wrong"
        },
      })
    }
  }

  static async logout(req, res) {
    req.session.user = null

    res.redirect("/login")
  }

  static settings(req, res) {
    renderSettings(req, res)
  }

  static async update(req, res) {

    // Validate if email is taken
    if (req.user.email !== req.body.email) {
      const userByEmail = await User.findOne({
        email: req.body.email,
      })
      if (userByEmail) {
        return renderSettings(req, res, {
          email: "Email already in use",
        })
      }
    }

    let user
    let updatedData = {
      name: req.body.name,
      email: req.body.email,
    }

    if (req.body.new_password.length > 0) {
      // Validate new password length
      if (req.body.new_password.length < 6) {
        return renderSettings(req, res, {
          new_password: "Please enter a longer password",
        })
      }

      // Validate current password
      if (!req.body.password) {
        return renderSettings(req, res, {
          password: "Please enter password",
        })
      }
      user = await User.findById(req.user._id)
      const isInvalidPassword = ! await bcrypt.compare(req.body.password, user.password)
      if (isInvalidPassword) {
        return renderSettings(req, res, {
          password: "Incorrect Password",
        })
      }
      const hashedPassword = await bcrypt.hash(req.body.new_password, 10)
      updatedData.password = hashedPassword
    } else {
      user = await User.findById(req.user._id)
    }

    user.set(updatedData)
    await user.save()
    req.session.user = user

    res.redirect("/")
  }
}

module.exports = UserController
