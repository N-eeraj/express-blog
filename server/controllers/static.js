const renderWithUserData = require("../../src/helper/renderWithUserData")

class StaticController {
  static index(req, res) {
    renderWithUserData(req, res, "index")
  }

  static about(req, res) {
    renderWithUserData(req, res, "about")
  }

  static privacy(req, res) {
    renderWithUserData(req, res, "privacy")
  }

  static pageNotFound(_req, res) {
    res.statusCode = 404
    res.render("404")
  }
}

module.exports = StaticController
