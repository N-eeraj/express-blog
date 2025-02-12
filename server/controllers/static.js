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

  static pageNotFound(req, res) {
    res.statusCode = 404
    renderWithUserData(req, res, "404")
  }
}

module.exports = StaticController
