function isVisitorMiddleware(req, _res, next) {
  req.user = req.session.user
  next()
}

function isGuestMiddleware(req, res, next) {
  if (req.session.user) {
    req.user = req.session.user
    res.redirect("/")
  } else {
    next()
  }
}

function isUserMiddleware(req, res, next) {
  if (req.session.user) {
    req.user = req.session.user
    next()
  } else {
    res.redirect("/login")
  }
}

module.exports = {
  isVisitorMiddleware,
  isGuestMiddleware,
  isUserMiddleware,
}
