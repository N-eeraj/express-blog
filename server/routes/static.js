const express = require("express")
const { isVisitorMiddleware } = require("../middlewares/authentication")
const StaticViews = require("../controllers/static")

const mainRouter = express.Router()

mainRouter.get("/", isVisitorMiddleware, StaticViews.index)
mainRouter.get("/about", isVisitorMiddleware, StaticViews.about)
mainRouter.get("/privacy", isVisitorMiddleware, StaticViews.privacy)

module.exports = mainRouter
