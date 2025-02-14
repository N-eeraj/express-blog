const renderWithUserData = require("../../src/helpers/renderWithUserData")
const renderPageNotFound = require("../../src/helpers/renderPageNotFound")

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
    renderPageNotFound(req, res)
  }
}

module.exports = StaticController
