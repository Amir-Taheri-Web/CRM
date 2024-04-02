import mongoose from "mongoose";
import toast from "react-hot-toast";

const connectDB = async (res) => {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to DB failed!");
    toast.error("Connection to server failed");

    if (res) {
      res.status(500).json({
        code: 500,
        status: "failure",
        message: "Connection to server failed",
      });
      return;
    }
  }
};

export default connectDB;
