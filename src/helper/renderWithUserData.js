function renderWithUserData({ isAuthenticated, username }, res, view, data) {
  res.render(view, {
    ...data,
    isAuthenticated,
    username,
  })
}

module.exports = renderWithUserData
