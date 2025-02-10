const express = require("express")

// routers
const staticRoutes = require("./static")
const userRoutes = require("./user")
const blogsRoutes = require("./blogs")

const {
  isVisitorMiddleware,
  isUserMiddleware,
} = require("../middlewares/authentication")
const StaticViews = require("../controllers/static")

const router = express.Router()


router.use(staticRoutes)
router.use(userRoutes)
router.use("/blog", isUserMiddleware, blogsRoutes)

router.get("/*", isVisitorMiddleware, StaticViews.pageNotFound)

module.exports = router
