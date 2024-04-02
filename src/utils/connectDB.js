import mongoose from "mongoose";

const connectDB = async (res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to DB failed!");

    if (res) {
      res.status(500).json({
        code: 500,
        status: "failure",
        message: "Connection to server failed",
      });
    }
  }
};

export default connectDB;
