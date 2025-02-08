const express = require("express")
require("dotenv").config()

const connectDB = require("./server/config/db")
const routes = require("./server/routes")

const app = express()
app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }))

app.use(routes)

connectDB(() => {
  app.listen(process.env.PORT)
  console.log(`Server running on port: ${process.env.PORT}`)
})
