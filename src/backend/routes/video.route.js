
const express = require("express");
const Video = require ("../models/video.model.js");
const app = express();
const {getVideos, getVideo, createVideo, updateVideo, deleteVideo} = require ('../controllers/video.controller.js');


router.get('/', getVideos);
router.get("/:id", getVideo);

router.post("/", createVideo);

// update a video
router.put("/:id", updateVideo);

// delete a video
router.delete("/:id", deleteVideo);




module.exports = router;