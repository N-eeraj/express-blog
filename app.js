const express = require("express")
require('dotenv').config()

const app = express()
app.set("view engine", "ejs")

app.listen(process.env.PORT)

app.get("/", (_req, res) => {
  res.render("index")
})

app.get("/login", (_req, res) => {
  res.render("login")
})

app.get("/register", (_req, res) => {
  res.render("register")
})

app.get("/*", (_req, res) => {
  res.render("404")
})

console.log(`Server running on port ${process.env.PORT}`)
