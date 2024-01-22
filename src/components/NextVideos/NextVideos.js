import { Component } from "react";
import videos from "../../data/videos.json";
import Video from "../Video/Video";
import "./NextVideos.scss";

class NextVideos extends Component {
    render() {
        return (
            <section className="nextVideos">
                <h3 className="nextVideos__title">NEXT VIDEOS</h3>
                {videos.map((video, i) => {
                    if (video.id !== this.props.currentVideoId) {
                        return (<Video key={video.id} title={video.title} channel={video.channel} image={video.image} />);
                    }
                    return null; 
                })}
            </section>
        )
    }
}

export default NextVideos;