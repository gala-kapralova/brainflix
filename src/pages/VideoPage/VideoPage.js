import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import videos from "../../data/videos.json";
import VideoContent from "../../components/VideoContent/VideoContent";
import videoDetails from "../../data/video-details.json";
import NextVideos from "../../components/NextVideos/NextVideos";

function VideoPage() {
  const videoData = videos[0];
  const videoContent = videoDetails[0];
  return (
    <div className="VideoPage">
      <Header />
      <MainVideo image={videoData.image}/>
      <VideoContent 
      title={videoContent.title}
      channel={videoContent.channel}
      image={videoContent.image}
      description={videoContent.description}
      views={videoContent.views}
      likes={videoContent.likes}
      timestamp={videoContent.timestamp}
      comments={videoContent.comments}
      avatar={videoContent.avatar}/>
      <NextVideos currentVideoId={videoData.id} />
    </div>
  );
}

export default VideoPage;
