export default function VideoPlayer({ video, onBack }) {
  return (
    <div className="watch-page">

      <button className="back-button" onClick={onBack}>
        ← Orqaga
      </button>

      <div className="player-container">
        <iframe
          className="youtube-player"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h1 className="watch-title">
        {video.title}
      </h1>

      <div className="watch-channel">
        <img
          src={video.avatar}
          alt={video.channel}
          className="watch-avatar"
        />

        <div>
          <h3>{video.channel}</h3>
          <p>
            {video.views} • {video.date}
          </p>
        </div>

        <button className="subscribe-button">
          Subscribe
        </button>
      </div>

      <div className="description">
        {video.description}
      </div>

    </div>
  );
}
