import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://tingweb:Apple123@tingweb.cayzawy.mongodb.net/portfolio?retryWrites=true&w=majority&appName=tingweb";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB successfully");
})
.catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});



import VideoRouter from "./routes/video.route.js";
app.use("/portfolio/video", VideoRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})