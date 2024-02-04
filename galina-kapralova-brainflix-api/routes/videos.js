const express = require("express");
const router = express.Router();

const { fetchVideos, addVideo } = require("../controllers/videos");

router.route("/")
  .get((req, res) => {
    const videoList = fetchVideos();
    const noIds = videoList.map(video => { 
      return {
        id: video["id"], 
        title: video["title"], 
        channel: video["channel"],
        image: video["image"],
        description: video["description"],
        views: video["views"],
        likes: video["likes"],
        timestamp: video["timestamp"]
      }});
    res.status(200).json(noIds);
  })

  .post((req, res) => {
    const { title, description, image } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "All requests must have a title and a description." });
    }
    const newVideo = {
      title,
      description,
      image, 
      views: "0",
      likes: "0",
      timestamp: Date.now(), 
      comments: [] 
    };
  
    const addedVideo = addVideo(newVideo);
    res.status(201).json(addedVideo);
  });

router.route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const videoMatch = fetchVideos().find((video) => video.id == id);
    if(!videoMatch) return res.status(404).json("No video with that ID");
    res.status(200).json(videoMatch);
  })
  .delete((req, res) => {

  })


// little more routing scaffolding
module.exports = router;