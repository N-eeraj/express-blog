const express = require("express")
const StaticViews = require("../controllers/static")

const mainRouter = express.Router()

mainRouter.get("/", StaticViews.index)
mainRouter.get("/about", StaticViews.about)
mainRouter.get("/privacy", StaticViews.privacy)

module.exports = mainRouter
