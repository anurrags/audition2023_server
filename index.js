const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Form = require("./models/Form");
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

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
mongoose.set("strictQuery", true);
app.get(
  "/api/102e4a99e1d2e239f518578f7233623437513e5f/all",
  async (req, res) => {
    try {
      const data = await Form.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);
app.get("/", (req, res) => {
  res.send("Hello from CSS");
});
connect();
app.listen(process.env.PORT, () => {
  console.log(`Listening on port localhost:${process.env.PORT}`);
});
