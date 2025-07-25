const mongoose = require ("mongoose");

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


const Video = mongoose.model("Videos", ProjectSchema);

module.exports = Video;
