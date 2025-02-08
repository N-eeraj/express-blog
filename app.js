const express = require("express")
require("dotenv").config()

const connectDB = require("./server/config/db")

// routers
const mainRouter = require("./server/routes/main")
const authRouter = require("./server/routes/auth")
const blogsRouter = require("./server/routes/blogs")

const app = express()
app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, _res, next) => {
  const isAuthenticated = false
  const username = null

  req.isAuthenticated = isAuthenticated
  req.username = username

  next()
})

app.use("/", mainRouter)
app.use("/", authRouter)
app.use("/blog", blogsRouter)

app.get("/*", (_req, res) => {
  res.render("404")
})

connectDB(() => {
  app.listen(process.env.PORT)
  console.log(`Server running on port: ${process.env.PORT}`)
})
