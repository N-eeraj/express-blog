const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
})

const Blog = mongoose.model("Blog", BlogSchema)

module.exports = Blog
