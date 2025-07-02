const express = require("express")
const {
  isBlogIdAuthorMiddleware,
  isBlogSlugAuthorMiddleware,
} = require("../middlewares/blog")
const Blog = require("../controllers/blog")

const blogsRouter = express.Router()

blogsRouter.get("/all", Blog.listAll)
blogsRouter.get("/my-blogs", Blog.listMyBlogs)

blogsRouter.route("/create")
  .get(Blog.createView)
  .post(Blog.create)

blogsRouter.get("/:slug", Blog.get)
blogsRouter.get("/:slug/edit", isBlogSlugAuthorMiddleware, Blog.editView)

blogsRouter.route("/:id")
  .all(isBlogIdAuthorMiddleware)
  .delete(Blog.delete)
  .patch(Blog.update)

module.exports = blogsRouter
