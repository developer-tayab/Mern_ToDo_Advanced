const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to server ${mongoose.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;