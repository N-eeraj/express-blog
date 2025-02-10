const express = require("express")
const {
  isGuestMiddleware,
  isUserMiddleware,
} = require("../middlewares/authentication")
const User = require("../controllers/user")

const userRouter = express.Router()

userRouter.get("/login", isGuestMiddleware, User.loginView)
userRouter.post("/login", isGuestMiddleware, User.login)
userRouter.get("/register", isGuestMiddleware, User.registerView)
userRouter.post("/register", isGuestMiddleware, User.register)

userRouter.post("/logout", isUserMiddleware, User.logout)
userRouter.get("/settings", isUserMiddleware, User.settings)

module.exports = userRouter
