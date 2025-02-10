const renderWithUserData = require("../../src/helper/renderWithUserData")

class StaticViews {
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
    res.render("404")
  }
}

module.exports = StaticViews
