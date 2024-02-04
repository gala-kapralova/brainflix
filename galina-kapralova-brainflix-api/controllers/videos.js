const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const videosFilePath = path.join(__dirname, '..', 'data', 'videos.json');

const fetchVideos = () => {
  return JSON.parse(fs.readFileSync(videosFilePath));
}

const addVideo = (newVideo) => {
  const defaultImagePath = "default-image.jpg"; 
  const videos = fetchVideos();
  const videoWithIdAndDefaults = {
    ...newVideo,
    id: uuidv4(), 
    image: newVideo.image || defaultImagePath, 
    views: newVideo.views || "0", 
    likes: newVideo.likes || "0", 
    channel: newVideo.channel || "Your channel name(placeholder)",
    timestamp: newVideo.timestamp || Date.now(), 
    comments: newVideo.comments || [] 
  };
  const updatedVideos = [...videos, videoWithIdAndDefaults];
  fs.writeFileSync(videosFilePath, JSON.stringify(updatedVideos, null, 2));
  return videoWithIdAndDefaults;
}

module.exports = { fetchVideos, addVideo }
