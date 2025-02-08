const mongoose = require("mongoose")

const connectDB = async (callback) => {
  try {
    console.log("Trying to connect to database")
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`Database Connected: ${connection.host}`)
    callback()
  } catch (error) {
    console.error("Failed to connect to database", error)
  }
}

module.exports = connectDB
