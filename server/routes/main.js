const express = require("express")

const mainRouter = express.Router()

mainRouter.get("/", (_req, res) => {
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
  res.render("index", {
    blogs,
  })
})

mainRouter.get("/about", (_req, res) => {
  res.render("about")
})

mainRouter.get("/privacy", (_req, res) => {
  res.render("privacy")
})

module.exports = mainRouter
