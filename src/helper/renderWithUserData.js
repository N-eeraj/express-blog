function renderWithUserData({ isAuthenticated, user }, res, view, data) {
  res.render(view, {
    ...data,
    isAuthenticated,
    user,
  })
}

module.exports = renderWithUserData
