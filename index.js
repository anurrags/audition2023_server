import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Form from "./models/Form";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.get(
  "/api/102e4a99e1d2e239f518578f7233623437513e5f/all",
  async (req, res) => {
    try {
      const data = Form.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Listening on port localhost:${process.env.PORT}`);
});
