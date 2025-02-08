const express = require("express")

// routers
const staticRoutes = require("./static")
const userRoutes = require("./user")
const blogsRoutes = require("./blogs")

const StaticViews = require("../controllers/static")
const authenticationMiddleware = require("../middlewares/authentication")

const router = express.Router()

router.use(authenticationMiddleware)

router.use(staticRoutes)
router.use(userRoutes)
router.use("/blog", blogsRoutes)

router.get("/*", StaticViews.pageNotFound)

module.exports = router
