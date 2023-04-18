// db.js

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Sharvil:sharvilm143@cluster0.6e3jweq.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
