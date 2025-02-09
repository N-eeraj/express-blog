function authenticationMiddleware(req, _res, next) {
  req.isAuthenticated = !!req.session.user
  req.user = req.session.user

  next()
}

module.exports = authenticationMiddleware
