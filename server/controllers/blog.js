const { URL } = require("url")
const Blog = require("../models/Blog")
const renderWithUserData = require("../../src/helper/renderWithUserData")

const pageSize = 12

class BlogController {
  static createView(req, res) {
    renderWithUserData(req, res, "blog/create")
  }

  static async create(req, res) {
    const blog = new Blog({
      ...req.body,
      author: {
        id: req.user._id,
        name: req.user.name,
      },
    })
    await blog.save()
    res.redirect("/blog/my-blogs")
  }

  static async get(req, res) {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    })

    if (!blog) {
      res.statusCode = 404
      renderWithUserData(req, res, "404")
    }

    renderWithUserData(req, res, "blog/view", {
      blog,
    })
  }

  static async listAll(req, res) {
    const pathname = new URL(req.originalUrl, `http://${req.headers.host}`).pathname
    const page = req.query.page ?? 1

    const [blogs, total] = await Promise.all([
      Blog
        .find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize),
      Blog.countDocuments(),
    ])

    renderWithUserData(req, res, "blog/list/all", {
      blogs,
      total,
      pathname,
      page,
    })
  }

  static async listMyBlogs(req, res) {
    const pathname = new URL(req.originalUrl, `http://${req.headers.host}`).pathname
    const page = req.query.page ?? 1

    const [blogs, total] = await Promise.all([
      Blog
        .find({ "author.id": req.user._id })
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize),
      Blog.countDocuments({ "author.id": req.user._id }),
    ])

    renderWithUserData(req, res, "blog/list/user", {
      blogs,
      total,
      pathname,
      page,
    })
  }

  static async delete(req, res) {
    try {
      console.log(req.params.slug)
      // await Blog.deleteOne({
      //   slug: req.params.slug,
      // })
      res.send({
        success: true,
        message: "Blog deleted"
      })
    } catch(error) {
      res.statusCode = 500
      res.send({
        success: false,
        message: "Failed to delete blog",
        error,
      })
    }
  }

  static async editView(req, res) {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    })

    if (!blog) {
      res.statusCode = 404
      renderWithUserData(req, res, "404")
    }

    renderWithUserData(req, res, "blog/create", {
      blog
    })
  }

  static async update(req, res) {
    try {
      console.log(req.body)
      res.send({
        success: true,
        message: "Blog Updated"
      })
    } catch(error) {
      res.statusCode = 500
      res.send({
        success: false,
        message: "Failed to update blog",
        error,
      })
    }
  }
}

module.exports = BlogController
