const renderWithUserData = require("./renderWithUserData")

function renderPageNotFound(req, res) {
  res.statusCode = 404
  renderWithUserData(req, res, "404")
}

module.exports = renderPageNotFound
