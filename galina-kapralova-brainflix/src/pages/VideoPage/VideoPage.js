import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoContent from "../../components/VideoContent/VideoContent";
import { NextVideos } from "../../components/NextVideos/NextVideos";
import axiosInstance from "../../components/axios-instance";

function VideoPage() {
  const [nextVideos, setNextVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchNextVideos = async () => {
      try {
        const response = await axiosInstance.get('videos');
        setNextVideos(response.data);
        setCurrentVideo(response.data.find(video => video.id === videoId) || response.data[0]);
      } catch (error) {
        console.error('Error fetching video list:', error);
      }
    };

    fetchNextVideos();
  }, [videoId]); 

  useEffect(() => {
    if (!currentVideo?.id) return;

    const fetchVideoDetails = async () => {
      try {
        const response = await axiosInstance.get(`videos/${currentVideo.id}`);
        setCurrentVideo(response.data);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [currentVideo?.id]); 

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="VideoPage">
      <Header />
      <MainVideo image={currentVideo.image} />
      <VideoContent 
        title={currentVideo.title}
        channel={currentVideo.channel}
        image={currentVideo.image}
        description={currentVideo.description}
        views={currentVideo.views}
        likes={currentVideo.likes}
        timestamp={currentVideo.timestamp}
        comments={currentVideo.comments}
        avatar={currentVideo.avatar}/>
      <NextVideos nextVideos={nextVideos} currentVideoId={currentVideo.id} />
    </div>
  );
}

export default VideoPage;

