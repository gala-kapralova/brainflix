const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const videosFilePath = path.join(__dirname, '..', 'data', 'videos.json');

const fetchVideos = () => {
  return JSON.parse(fs.readFileSync(videosFilePath));
}

const addVideo = (newVideo) => {
  const videos = fetchVideos();
  const videoWithId = { ...newVideo, id: uuidv4() }; 
  const updatedVideos = [...videos, videoWithId];
  fs.writeFileSync(videosFilePath, JSON.stringify(updatedVideos, null, 2)); 
  return videoWithId;
}

module.exports = { fetchVideos, addVideo }
