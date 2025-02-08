function authenticationMiddleware(req, _res, next) {
  const isAuthenticated = false
  const username = null

  req.isAuthenticated = isAuthenticated
  req.username = username

  next()
}

module.exports = authenticationMiddleware
