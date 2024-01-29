import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from "../Video/Video";
import "./NextVideos.scss";
import axiosInstance from "../axios-instance";

export const NextVideos = ({ currentVideoId }) => {
    const [nextVideos, setNextVideos] = useState([]);
    const { videoId } = useParams();

    useEffect(() => {
        const fetchNextVideos = async () => {
            try {
                const response = await axiosInstance.get('videos');
                setNextVideos(response.data);
            } catch (error) {
                console.error('Error fetching video list:', error);
            }
        };

        fetchNextVideos();
    }, []);

    const videoIdToShow = videoId || currentVideoId;

    return (
        <section className="nextVideos">
            <h3 className="nextVideos__title">NEXT VIDEOS</h3>
            <ul>
                {nextVideos.filter(video => video.id !== videoIdToShow).map(video => (
                    <li key={video.id}>
                        <Video {...video} />
                    </li>
                ))}
            </ul>
        </section>
    );
};