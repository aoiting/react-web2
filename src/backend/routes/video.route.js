
import express from"express";
const Video = require ("../models/video.model.js");
const app = express();
const router = express.Router();
import {getVideos, getVideo, createVideo, updateVideo, deleteVideo} from '../controllers/video.controller.js';


router.get('/', getVideos);
router.get("/:id", getVideo);

router.post("/", createVideo);

// update a video
router.put("/:id", updateVideo);

// delete a video
router.delete("/:id", deleteVideo);




export default router;