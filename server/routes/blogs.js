const express = require("express")
const {
  isBlogIdAuthorMiddleware,
  isBlogSlugAuthorMiddleware,
} = require("../middlewares/blog")
const Blog = require("../controllers/blog")

const blogsRouter = express.Router()

blogsRouter.get("/all", Blog.listAll)
blogsRouter.get("/my-blogs", Blog.listMyBlogs)
blogsRouter.get("/create", Blog.createView)
blogsRouter.post("/create", Blog.create)

blogsRouter.get("/:slug", Blog.get)
blogsRouter.get("/:slug/edit", isBlogSlugAuthorMiddleware, Blog.editView)

blogsRouter.delete("/:id", isBlogIdAuthorMiddleware, Blog.delete)
blogsRouter.patch("/:id/update", isBlogIdAuthorMiddleware, Blog.update)

module.exports = blogsRouter
