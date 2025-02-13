const express = require("express")
const session = require("express-session")
const methodOverride = require("method-override")
require("dotenv").config()

const connectDB = require("./server/config/db")
const routes = require("./server/routes")

const app = express()
app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
)

app.use(routes)

connectDB(() => {
  app.listen(process.env.PORT)
  console.log(`Server running on port: ${process.env.PORT}`)
})
