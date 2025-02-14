function renderWithUserData({ user }, res, view, data) {
  res.render(view, {
    ...data,
    isAuthenticated: !!user,
    user,
  })
}

module.exports = renderWithUserData
