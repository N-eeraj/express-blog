const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please provide a valid email address"
    ],
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const User = mongoose.model("User", UserSchema)

module.exports = User
