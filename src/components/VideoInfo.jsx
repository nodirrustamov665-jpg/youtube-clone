export default function VideoInfo({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="video-info-overlay">
      <div className="video-info">

        {/* Yopish tugmasi */}
        <button
          className="close-button"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Video */}
        <div className="video-player">
          <video
            src={video.videoUrl}
            controls
            autoPlay
            className="main-video"
          />
        </div>

        {/* Video nomi */}
        <h1>{video.title}</h1>

        {/* Kanal */}
        <div className="channel-info">
          <img
            src={video.avatar}
            alt={video.channel}
            className="channel-avatar"
          />

          <div>
            <h3>{video.channel}</h3>
            <p>{video.subscribers || "1M subscribers"}</p>
          </div>

          <button className="subscribe-button">
            Subscribe
          </button>
        </div>

        {/* Ko‘rishlar va sana */}
        <div className="video-stats">
          <span>{video.views}</span>
          <span> • </span>
          <span>{video.date}</span>
        </div>

        {/* Description */}
        <div className="video-description">
          <p>
            {video.description || "Bu video uchun description mavjud emas."}
          </p>
        </div>

      </div>
    </div>
  );
}
