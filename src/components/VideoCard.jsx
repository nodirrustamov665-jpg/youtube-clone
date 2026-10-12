export default function VideoCard({ video, onOpen }) {
  return (
    <article
      className="video-card"
      onClick={() => onOpen(video)}
    >
      <div className="thumbnail-wrapper">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="thumbnail"
        />

        <span className="duration">
          {video.duration}
        </span>
      </div>

      <div className="video-details">
        <img
          src={video.avatar}
          alt=""
          className="channel-avatar"
        />

        <div className="video-text">
          <h3>{video.title}</h3>

          <p>{video.channel}</p>

          <p>
            {video.views} • {video.date}
          </p>
        </div>

        <button
          className="more-button"
          onClick={(e) => e.stopPropagation()}
        >
          ⋮
        </button>
      </div>
    </article>
  );
}
