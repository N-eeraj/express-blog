const express = require("express")

const blogsRouter = express.Router()

blogsRouter.get("/blogs", (_req, res) => {
  res.render("blogs")
})

blogsRouter.get("/my-blogs", (_req, res) => {
  res.render("my-blogs")
})

module.exports = blogsRouter
