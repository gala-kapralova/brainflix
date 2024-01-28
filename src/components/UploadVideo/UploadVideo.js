import "./UploadVideo.scss";
import videoPreview from"../../assets/images/Upload-video-preview.jpg"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const UploadVideo = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('🎞️Video has been uploaded!');
        navigate('/'); 
    };
    return (
    <section className="upload">
        <hr className="upload__divider-header"></hr>
        <h1 className="upload__heading">Upload Video</h1>
        <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__thumbnail">
                <hr className="upload__thumbnail-divider"></hr>
                <h3 className="upload__thumbnail-heading">VIDEO THUMBNAIL</h3>
                <img className="upload__thumbnail-image" src={videoPreview} alt="Video Thumbnail" name="video"></img>
            </div>

            <div className="upload__input">
                <div className="upload__input-title">
                    <h3 className="upload__input-title-heading">TITLE YOUR VIDEO</h3>
                    <input className="upload__input-title-text" type="text" name="videoTitle" placeholder="Add a title to your video"></input>
                </div>
                <div className="upload__input-description">
                    <h3 className="upload__input-description-heading">ADD A VIDEO DESCRIPTION</h3> 
                    <textarea className="upload__input-description-text" name="comment" placeholder="Add a description of your video"></textarea>
                </div>
                <hr className="upload__input-divider"></hr>
            </div>
            <div className="upload__buttons">
            <button type="submit" className="upload__buttons-publish">PUBLISH</button>
            <button type="button" className="upload__buttons-cancel">CANCEL</button>
            </div>
        </form>
    </section>
    );
};

export default UploadVideo;