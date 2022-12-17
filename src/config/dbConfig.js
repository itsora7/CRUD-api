import mongoose from "mongoose";
export const connectDB = () => {
  try {
    const mongoUrl = "mongodb://127.0.0.1:27017/users_curd";
    const conn = mongoose.connect(mongoUrl);
    conn ? console.log("Mongo connected") : console.error("unable to connect");
  } catch (error) {
    console.error(error);
  }
};

// http://127.0.0.1:8000/usershttp://127.0.0.1:8000/users
