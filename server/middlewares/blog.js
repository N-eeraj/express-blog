const Blog = require("../models/Blog")
const { default: mongoose } = require("mongoose")
const renderPageNotFound = require("../../src/helpers/renderPageNotFound")

async function isBlogIdAuthorMiddleware(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    renderPageNotFound(req, res)
  }
  const blog = await Blog.findById(req.params.id)
  if (!blog) {
    renderPageNotFound(req, res)
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
    renderPageNotFound(req, res)
  }
}

module.exports = {
  isBlogIdAuthorMiddleware,
  isBlogSlugAuthorMiddleware,
}
