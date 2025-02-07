const { URL } = require("url")
const renderWithUserData = require("../../src/helper/renderWithUserData")

const blogs = [
  {
    slug: "1",
    title: "Blog 1",
    author: {
      id: 1,
      name: "Blog 1 Author",
    },
    createdAt: new Date(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
    tags: [
      "tag 1",
      "tag 3",
    ],
  },
  {
    slug: "2",
    title: "Blog 2",
    author: {
      id: 2,
      name: "Blog 2 Author",
    },
    createdAt: new Date(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
    tags: [
      "tag 2",
      "tag 4",
      "tag 5",
    ],
  },
  {
    slug: "3",
    title: "Blog 3",
    author: {
      id: 3,
      name: "Blog 3 Author",
    },
    createdAt: new Date(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
    tags: [
      "tag 1",
    ],
  },
  {
    slug: "4",
    title: "Blog 4",
    author: {
      id: 4,
      name: "Blog 4 Author",
    },
    createdAt: new Date(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta?",
    tags: [
      "tag 1",
      "tag 4",
    ],
  },
]

class Blog {
  static create(req, res) {
    renderWithUserData(req, res, "blog/create")
  }

  static get(req, res) {
    const blog = blogs.find(({ slug }) => slug === req.params.slug)
    
    if (!blog) {
      res.statusCode = 404
      renderWithUserData(req, res, "404")
    }
  
    renderWithUserData(req, res, "blog/view", blog)
  }

  static listAll(req, res) {
    const pathname = new URL(req.originalUrl, `http://${req.headers.host}`).pathname
    const page = req.query.page ?? 1
    renderWithUserData(req, res, "blog/list/all", {
      blogs,
      total: 32,
      pathname,
      page,
    })
  }

  static listMyBlogs(req, res) {
    const pathname = new URL(req.originalUrl, `http://${req.headers.host}`).pathname
    const page = req.query.page ?? 1
    renderWithUserData(req, res, "blog/list/user", {
      blogs: blogs.filter(({ author }) => author.id === 2),
      total: 32,
      pathname,
      page,
    })
  }
}

module.exports = Blog
