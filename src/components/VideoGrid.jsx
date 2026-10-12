import { Link } from "react-router-dom";
import { videosData, shortsData } from "../data/videos";

export default function VideoGrid() {
  return (
    <div className="content-container">
      {/* Videolar ro'yxati */}
      <div className="video-grid">
        {videosData.map((video) => (
          <Link href={`/watch/${video.id}`} key={video.id} to={`/watch/${video.id}`} className="video-card">
            <div className="thumbnail-wrapper">
              <img src={video.thumbnail} alt={video.title} className="thumbnail" />
              <span className="duration">{video.duration}</span>
            </div>
            <div className="video-details">
              <img src={video.avatar} alt={video.channel} className="channel-avatar" />
              <div className="video-text">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
                <p>{video.views} • {video.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Shorts seksiyasi */}
      <section className="shorts-section">
        <div className="shorts-header">
          <h2>Shorts</h2>
        </div>
        <div className="shorts-grid">
          {shortsData.map((short) => (
            <div key={short.id} className="short-card">
              <div className="short-thumbnail">
                <img src={short.thumbnailUrl} alt={short.title} />
              </div>
              <div className="short-info">
                <h3>{short.title}</h3>
                <p>{short.views}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}