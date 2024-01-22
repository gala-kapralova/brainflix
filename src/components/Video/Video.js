import "./Video.scss"

const Video = props => {
    return (
        <section className="video">
            <div>
                <img src={props.image} alt="Video Thumbnail" className="video__thumbnail" />
            </div>
            <div className="video__details">
                <p className="video__details-title">{props.title}</p>
                <p className="video__details-channel">{props.channel}</p>
            </div>
        </section>
    )
}

export default Video;