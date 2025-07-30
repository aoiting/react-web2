import mongoose from "mongoose";
import Video from "../models/video.model.js";

const ProjectSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true
    },

    videoTitle: {
      type: String,
      required: [true, "Please enter video title"],
    },

    videoDescription: {
      type: String,
      required: true,
      default: 0,
    },


    videoLocation: {
      type: String,
      required: [true, "Please enter video location"],
    },
  },
  {
    timestamps: true,
  }
);


const Video = mongoose.model("Video", ProjectSchema);

export default Video;