import "./VideoContent.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const VideoContent = ({ title, channel, image, description, views, likes, timestamp, comments }) => (
    <section className="video-content">
        <div className="video-content__heading">
            <h1 className="video-content__title">{title}</h1>
            <hr className="video-content__divider-title" />
            <div className="video-content__channel-icons-container">
                <div className="video-content__channel">
                    <h3 className="video-content__channel-author">By {channel}</h3>
                    <span className="video-content__channel-date">
                        {new Date(timestamp).toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                        })}
                    </span>
                </div>
                <div className="video-content__icons">
                    <div className="video-content__views-icons">
                        <img src={viewsIcon} alt="Views Icon" /> <span>{views}</span>
                    </div>
                    <div className="video-content__likes-icons">
                        <img src={likesIcon} alt="Likes Icon" /> <span>{likes}</span>
                    </div>
                </div>
            </div>
        </div>
        <hr className="video-content__divider-description" />
        <div className="video-content__description">
            <p>{description}</p>
        </div>
        <div className="video-content__comment">
            <h2 className="video-content__comment-count">
                 {comments ? `${comments.length} Comments` : 'No Comments'}
            </h2>
            <div className="video-content__comment-add">
                <form action="" method="" className="video-content__comment-form">
                    <div className="video-content__comment-container">
                        <div className="video-content__comment-avatar">
                            <img src={avatar} alt="Avatar image" className="video-content__comment-avatar-image" />
                        </div>
                        <div className="video-content__comment-input">
                            <div className="video-content__comment-input-container">
                                <div className="video-content__comment-input-title">
                                    <label htmlFor="comment" className="video-content__comment-input-heading">JOIN THE CONVERSATION</label>
                                </div>
                                <textarea name="comment" cols="30" rows="5" placeholder="Add a new comment"></textarea>
                            </div>
                            <div className="video-content__comment-submit">
                                <button type="submit" className="video-content__comment-submit-button">COMMENT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="video-content__comments">
            {comments && comments.map((comment, index) => (
                <div className="video-content__comments-card" key={index}>
                    <div className="video-content__comments-avatar">
                        {comment.avatar ? 
                            <img src={comment.avatar} alt="Commenter's Avatar" className="video-content__comments-avatar-image" />
                            : 
                            <div className="default-avatar"></div>
                        }
                    </div>
                    <div className="video-content__comments-container">
                        <div className="video-content__comments-heading">
                            <p className="video-content__comments-heading-name">{comment.name}</p>
                            <p className="video-content__comments-heading-timestamp">
                                {new Date(comment.timestamp).toLocaleDateString('en-US', {
                                    month: '2-digit',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                        <p className="video-content__comments-text">{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default VideoContent;