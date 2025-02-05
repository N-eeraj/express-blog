const express = require("express")

const blogsRouter = express.Router()

blogsRouter.get("/blogs", (_req, res) => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 3",
      ],
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 2",
        "tag 4",
        "tag 5",
      ],
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
      ],
    },
  ]
  res.render("blogs", {
    blogs,
  })
})

blogsRouter.get("/my-blogs", (_req, res) => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 3",
      ],
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 2",
        "tag 4",
        "tag 5",
      ],
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
      ],
    },
  ]
  res.render("my-blogs", {
    blogs,
  })
})

blogsRouter.get("/blog/create", (_req, res) => {
  res.render("blogsCreate")
})

module.exports = blogsRouter
