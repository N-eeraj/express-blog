const Blog = require("../models/Blog")
const renderWithUserData = require("../../src/helper/renderWithUserData")

async function isBlogIdAuthorMiddleware(req, res, next) {
  const blog = await Blog.findById(req.params.id)
  if (!blog) {
    res.statusCode = 404
    res.send({
      success: false,
      message: "Blog not found",
    })
  } else if (blog.author.id === req.session.user._id) {
    next()
  } else {
    res.statusCode = 403
    res.send({
      success: false,
      message: "Unauthorized",
    })
  }
}

async function isBlogSlugAuthorMiddleware(req, res, next) {
  const blog = await Blog.findOne({
    slug: req.params.slug,
  })
  if (blog?.author.id === req.session.user._id) {
    next()
  } else {
    res.statusCode = 404
    renderWithUserData(req, res, "404")
  }
}

module.exports = {
  isBlogIdAuthorMiddleware,
  isBlogSlugAuthorMiddleware,
}
