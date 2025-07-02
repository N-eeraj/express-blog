const express = require("express")
const {
  isGuestMiddleware,
  isUserMiddleware,
} = require("../middlewares/authentication")
const User = require("../controllers/user")

const userRouter = express.Router()

userRouter.route("/login")
  .all(isGuestMiddleware)
  .get(User.loginView)
  .post(User.login)

userRouter.route("/register")
  .all(isGuestMiddleware)
  .get(User.registerView)
  .post(User.register)

userRouter.post("/logout", isUserMiddleware, User.logout)
userRouter.get("/settings", isUserMiddleware, User.settings)
userRouter.patch("/update-profile", isUserMiddleware, User.update)

module.exports = userRouter
