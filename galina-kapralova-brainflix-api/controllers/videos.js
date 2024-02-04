const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const videosFilePath = path.join(__dirname, '..', 'data', 'videos.json');

const fetchVideos = () => {
  return JSON.parse(fs.readFileSync(videosFilePath));
}

// const addVideo = (newVideo) => {
//   const videos = fetchVideos();
//   const videoWithId = { ...newVideo, id: uuidv4() }; 
//   const updatedVideos = [...videos, videoWithId];
//   fs.writeFileSync(videosFilePath, JSON.stringify(updatedVideos, null, 2)); 
//   return videoWithId;
// const addVideo = (newVideo) => {
//   const videos = fetchVideos();
//   const videoWithIdAndImage = { 
//     ...newVideo, 
//     id: uuidv4(), 
//     image: newVideo.image || "../public/images/default-image.jpg", 
//     views: "0", 
//     likes: "0", 
//     timestamp: Date.now(), 
//     title: [],
//     description: [],
//     comments: [] 
//   };
const addVideo = (newVideo) => {
  const defaultImagePath = "default-image.jpg"; 
  const videos = fetchVideos();
  const videoWithIdAndDefaults = {
    ...newVideo,
    id: uuidv4(), // Generate a unique ID for the new video
    image: newVideo.image || defaultImagePath, // Provide a default image path if not specified
    views: newVideo.views || "0", // Default views count
    likes: newVideo.likes || "0", // Default likes count
    timestamp: newVideo.timestamp || Date.now(), // Current timestamp as default
    comments: newVideo.comments || [] // Empty array as default for comments
  };
  const updatedVideos = [...videos, videoWithIdAndDefaults];
  fs.writeFileSync(videosFilePath, JSON.stringify(updatedVideos, null, 2));
  return videoWithIdAndDefaults;
}

module.exports = { fetchVideos, addVideo }
