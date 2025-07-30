import mongoose from "mongoose";
import Video from "../models/video.model.js";

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await Video.findByIdAndUpdate(id, req.body);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const updatedVideo = await Video.findById(id);
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await Video.findByIdAndDelete(id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
};
