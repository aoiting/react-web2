import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://tingweb:Apple123@tingweb.cayzawy.mongodb.net/?retryWrites=true&w=majority&appName=tingweb";
import VideoRouter from "./routes/video.route.js";
app.use("/video", VideoRouter);


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})