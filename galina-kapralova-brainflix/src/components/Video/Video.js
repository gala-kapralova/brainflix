import "./Video.scss"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axiosInstance from "../../components/axios-instance";

export const Video = ({ id, channel, image }) => {

    const [ videoDetails, setVideoDetails ] = useState({})    
    const fetchFullVideoDetails = async () => {
        try {
            const response = await axiosInstance.get(`videos/${id}`);
            setVideoDetails(response.data);
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    }

    useEffect(() => {
        fetchFullVideoDetails();
    },[id])

    return (
        <section className="video">
            <div>
            <Link to={`/video-player/${id}`} ><img src={image} alt="Video Thumbnail" className="video__thumbnail" /></Link>
            </div>
            <div className="video__details">
                <Link to={`/video-player/${id}`} className="video__details-title">{videoDetails.title}</Link>
                <p className="video__details-channel">{channel}</p>
            </div>
        </section>
    )
}
