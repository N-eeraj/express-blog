const express = require("express")
require("dotenv").config()

// routers
const authRouter = require("./server/routes/auth")
const blogsRouter = require("./server/routes/blogs")

const app = express()
app.set("view engine", "ejs")
app.use(express.static("./public"))

app.get("/", (_req, res) => {
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

app.use("/", authRouter)
app.use("/", blogsRouter)

app.get("/*", (_req, res) => {
  res.render("404")
})

app.listen(process.env.PORT)

console.log(`Server running on port ${process.env.PORT}`)
