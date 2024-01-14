import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

// const CONNECTION_URI = 'mongodb+srv://shhadyse:w1t9WTMJPO83MT98@cluster0.44ztj9z.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI).then(() => {
  app.listen("6000", () => {
    console.log("listening on port 6000");
  });
});
