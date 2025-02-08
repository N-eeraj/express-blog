const express = require("express")
const Blog = require("../controllers/blog")

const blogsRouter = express.Router()

blogsRouter.get("/all", Blog.listAll)
blogsRouter.get("/my-blogs", Blog.listMyBlogs)
blogsRouter.get("/create", Blog.create)
blogsRouter.get("/:slug", Blog.get)

module.exports = blogsRouter
