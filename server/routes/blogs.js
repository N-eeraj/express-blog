const express = require("express")

const blogsRouter = express.Router()

blogsRouter.get("/all", (_req, res) => {
  const blogs = [
    {
      slug: 1,
      title: "Blog 1",
      author: "Blog 1 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 3",
      ],
    },
    {
      slug: 2,
      title: "Blog 2",
      author: "Blog 2 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 2",
        "tag 4",
        "tag 5",
      ],
    },
    {
      slug: 3,
      title: "Blog 3",
      author: "Blog 3 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
      ],
    },
    {
      slug: 4,
      title: "Blog 4",
      author: "Blog 4 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 4",
      ],
    },
  ]
  res.render("blog/list/all", {
    blogs,
  })
})

blogsRouter.get("/my-blogs", (_req, res) => {
  const blogs = [
    {
      slug: 1,
      title: "Blog 1",
      author: "Blog 1 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 3",
      ],
    },
    {
      slug: 2,
      title: "Blog 2",
      author: "Blog 2 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 2",
        "tag 4",
        "tag 5",
      ],
    },
    {
      slug: 3,
      title: "Blog 3",
      author: "Blog 3 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
      ],
    },
    {
      slug: 4,
      title: "Blog 4",
      author: "Blog 4 Author",
      createdAt: new Date(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
      tags: [
        "tag 1",
        "tag 4",
      ],
    },
  ]
  res.render("blog/list/user", {
    blogs,
  })
})

blogsRouter.get("/create", (_req, res) => {
  res.render("blog/create")
})

blogsRouter.get("/:slug", (req, res) => {
  const blog = {
    slug: 1,
    title: "Blog 1",
    author: "Blog 1 Author",
    createdAt: new Date(),
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
    tags: [
      "tag 1",
      "tag 3",
    ],
  }
  
  if (!blog) {
    return res.status(404).send("Blog not found")
  }
  
  res.render("blog/view", blog)
})

module.exports = blogsRouter
