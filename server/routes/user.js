const express = require("express")
const User = require("../controllers/user")

const userRouter = express.Router()

userRouter.get("/login", User.loginView)
userRouter.post("/login", User.login)
userRouter.get("/register", User.registerView)
userRouter.post("/register", User.register)
userRouter.post("/logout", User.logout)

module.exports = userRouter
