const renderWithUserData = require("./renderWithUserData")

function renderSettings(req, res, errors) {
  if (errors) {
    res.statusCode = 422
  }
  return renderWithUserData(req, res, "settings", {
    errors,
  })
}

module.exports = renderSettings
