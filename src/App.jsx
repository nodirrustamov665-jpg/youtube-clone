import { useState } from "react";
import "./App.css";

const videosData = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    channel: "Rick Astley",
    views: "1.5 mlrd marta",
    date: "14 yil oldin",
    duration: "3:33"
  },
  {
    id: "2",
    youtubeId: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    channel: "Luis Fonsi VEVO",
    views: "8.2 mlrd marta",
    date: "7 yil oldin",
    duration: "4:41"
  },
  {
    id: "3",
    youtubeId: "L_LUpnjgPso",
    title: "4K Nature Relaxation Film - Wonderful World",
    thumbnail: "https://img.youtube.com/vi/L_LUpnjgPso/hqdefault.jpg",
    channel: "Relaxation Film",
    views: "14 mln marta",
    date: "2 yil oldin",
    duration: "58:12"
  },
  {
    id: "4",
    youtubeId: "fJ9rUzIMcZQ",
    title: "Queen – Bohemian Rhapsody (Official Video Remastered)",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    channel: "Queen Official",
    views: "1.7 mlrd marta",
    date: "15 yil oldin",
    duration: "6:00"
  },
  {
    id: "5",
    youtubeId: "3JZ_D3ELwOQ",
    title: "React JS Full Course 2026 | Beginner to Advanced",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    channel: "Free Code Camp",
    views: "450 ming marta",
    date: "5 oy oldin",
    duration: "1:45:20"
  },
  {
    id: "6",
    youtubeId: "2Vv-BfVoq4g",
    title: "Ed Sheeran - Perfect (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    channel: "Ed Sheeran",
    views: "3.6 mlrd marta",
    date: "6 yil oldin",
    duration: "4:39"
  },
  {
    id: "7",
    youtubeId: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE (강남스타일) M/V",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    channel: "Official PSY",
    views: "5.1 mlrd marta",
    date: "11 yil oldin",
    duration: "4:12"
  },
  {
    id: "8",
    youtubeId: "JGwWNGJdvx8",
    title: "Ed Sheeran - Shape of You (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    channel: "Ed Sheeran",
    views: "6.2 mlrd marta",
    date: "7 yil oldin",
    duration: "4:23"
  }
];

const shortsData = [
  {
    id: "s1",
    youtubeId: "5qap5aO4i9A",
    title: "Lofi Hip Hop Beats ⚡ Relaxing Music",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
    views: "2.4 mln marta"
  },
  {
    id: "s2",
    youtubeId: "1La4QzyL5Uo",
    title: "Fastest Coding Tips 🚀 #Shorts",
    thumbnail: "https://img.youtube.com/vi/1La4QzyL5Uo/hqdefault.jpg",
    views: "890 ming marta"
  },
  {
    id: "s3",
    youtubeId: "3JZ_D3ELwOQ",
    title: "React Tricks You Need To Know 🔥",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    views: "1.1 mln marta"
  },
  {
    id: "s4",
    youtubeId: "fJ9rUzIMcZQ",
    title: "Guitar Solo Challenge 🎸",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    views: "3.5 mln marta"
  },
  {
    id: "s5",
    youtubeId: "dQw4w9WgXcQ",
    title: "Top 10 Moments 🏆",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    views: "5.2 mln marta"
  }
];

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videosData.filter(
    (v) =>
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredShorts = shortsData.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <button className="menu-btn">
            <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: "#fff" }}>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <div
            className="youtube-logo"
            onClick={() => {
              setCurrentVideo(null);
              setSearchQuery("");
            }}
          >
            <svg viewBox="0 0 90 20" style={{ width: 90, height: 20 }}>
              <path
                fill="#FF0000"
                d="M27.972 3.123c-.485-.705-1.144-1.218-1.928-1.527C24.48 1 14 1 14 1s-10.48 0-12.044.596c-.784.309-1.443.822-1.928 1.527C0 4.688 0 10 0 10s0 5.312.028 6.877c.485.705 1.144 1.218 1.928 1.527C3.52 19 14 19 14 19s10.48 0 12.044-.596c.784-.309 1.443-.822 1.928-1.527C28 15.312 28 10 28 10s0-5.312-.028-6.877z"
              />
              <path fill="#FFF" d="M11 14l7-4-7-4v8z" />
              <text x="32" y="15" fill="#FFF" fontSize="16" fontWeight="bold">
                YouTube
              </text>
            </svg>
          </div>
        </div>

        <div className="header-center">
          <div className="search-box">
            <input
              type="text"
              placeholder="Qidiruv"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" onClick={() => setCurrentVideo(null)}>
              <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "#fff" }}>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="header-right">
          <button className="sign-in-btn">
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "#3ea6ff" }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            Kirish
          </button>
        </div>
      </header>

      <div className="app-container">
        {/* SIDEBAR (Aynan rasmdagidek rasmiy SVG ikonkalar bilan) */}
        {!currentVideo && (
          <aside className="sidebar">
            {/* 1-Bo'lim */}
            <div className="sidebar-section">
              <div
                className="sidebar-item active"
                onClick={() => {
                  setCurrentVideo(null);
                  setSearchQuery("");
                }}
              >
                <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                Asosiy
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M17.77 10.32l-1.2-.5L18 8.8c1.57-.86 2.13-2.84 1.27-4.41-.86-1.57-2.84-2.13-4.41-1.27l-8 4.38C5.32 8.35 4.5 10 4.63 11.75c.13 1.76 1.15 3.27 2.72 4l1.2.5L7 17.2c-1.57.86-2.13 2.84-1.27 4.41.86 1.57 2.84 2.13 4.41 1.27l8-4.38c1.54-.85 2.36-2.5 2.23-4.25-.13-1.76-1.15-3.27-2.6-4zm-6.77 5.18v-7l6 3.5-6 3.5z" /></svg>
                Shorts
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z" /></svg>
                Obunalar
              </div>
            </div>

            {/* 2-Bo'lim */}
            <div className="sidebar-section">
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                Siz
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M11.9 3.75c-4.55 0-8.25 3.69-8.25 8.25H1L4.5 16 8 12H5.15c0-3.73 3.02-6.75 6.75-6.75 3.73 0 6.75 3.02 6.75 6.75s-3.02 6.75-6.75 6.75c-1.87 0-3.56-.76-4.78-1.98l-1.06 1.06c1.49 1.49 3.55 2.42 5.84 2.42 4.55 0 8.25-3.69 8.25-8.25s-3.7-8.25-8.25-8.25zm-.65 4.25v4.5l3.8 2.25.75-1.23-3.05-1.82V8h-1.5z" /></svg>
                Tomosha tarixi
              </div>
            </div>

            {/* Login Prompt */}
            <div className="sidebar-section">
              <div className="sidebar-login-prompt">
                <p style={{ marginBottom: "12px" }}>
                  Videolarni yoqtirish, fikr yozish va obuna uchun hisobingizga kiring.
                </p>
                <button className="sign-in-btn">
                  <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "#3ea6ff" }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  Kirish
                </button>
              </div>
            </div>

            {/* Tanishuv */}
            <div className="sidebar-section">
              <div className="sidebar-title">Tanishuv</div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                Musiqa
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                Jonli
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                Gaming
              </div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
                Yana
              </div>
            </div>

            {/* YouTube xizmatlari */}
            <div className="sidebar-section">
              <div className="sidebar-title">YouTube xizmatlari</div>
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path fill="red" d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z" /></svg>
                YouTube Kids
              </div>
            </div>

            {/* Shikoyatlar */}
            <div className="sidebar-section">
              <div className="sidebar-item">
                <svg viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" /></svg>
                Shikoyatlar tarixi
              </div>
            </div>

            {/* Footer */}
            <div className="sidebar-links">
              <p>
                <span>Kanal haqida</span> <span>Matbuot</span><br />
                <span>Mualliflik huquqi</span><br />
                <span>Biz bilan aloqa</span> <span>Ijodkorlar</span><br />
                <span>Reklama</span> <span>Dasturchilar</span>
              </p>
              <br />
              <p>
                <span>Shartlar</span> <span>Maxfiylik</span><br />
                <span>Qoidalar va xavfsizlik</span><br />
                <span>YouTube qanday ishlaydi</span><br />
                <span>Yangi funksiyalarni sinash</span>
              </p>
            </div>

            <div className="sidebar-copyright">
              © 2026 Google LLC
            </div>
          </aside>
        )}

        {/* CONTENT */}
        {!currentVideo ? (
          <main className="main-content">
            {filteredVideos.length === 0 && filteredShorts.length === 0 ? (
              <div style={{ textAlign: "center", marginTop: "40px", color: "#aaa" }}>
                <h2>Hech narsa topilmadi 😕</h2>
                <p>Boshqa so'z bilan qidirib ko'ring.</p>
              </div>
            ) : (
              <>
                <div className="video-grid">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      className="video-card"
                      onClick={() => {
                        setCurrentVideo(video);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="thumbnail-wrapper">
                        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                        <span className="duration">{video.duration}</span>
                      </div>
                      <div className="video-details">
                        <div className="channel-avatar">{video.channel[0]}</div>
                        <div className="video-text">
                          <h3>{video.title}</h3>
                          <p>{video.channel}</p>
                          <p>{video.views} • {video.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredShorts.length > 0 && (
                  <section className="shorts-section">
                    <div className="shorts-header">
                      <svg viewBox="0 0 24 24"><path d="M17.77 10.32l-1.2-.5L18 8.8c1.57-.86 2.13-2.84 1.27-4.41-.86-1.57-2.84-2.13-4.41-1.27l-8 4.38C5.32 8.35 4.5 10 4.63 11.75c.13 1.76 1.15 3.27 2.72 4l1.2.5L7 17.2c-1.57.86-2.13 2.84-1.27 4.41.86 1.57 2.84 2.13 4.41 1.27l8-4.38c1.54-.85 2.36-2.5 2.23-4.25-.13-1.76-1.15-3.27-2.6-4zm-6.77 5.18v-7l6 3.5-6 3.5z" /></svg>
                      Shorts
                    </div>
                    <div className="shorts-grid">
                      {filteredShorts.map((short) => (
                        <div
                          key={short.id}
                          className="short-card"
                          onClick={() => {
                            setCurrentVideo({
                              youtubeId: short.youtubeId,
                              title: short.title,
                              channel: "Shorts Channel",
                              views: short.views,
                              date: "Yangi"
                            });
                            window.scrollTo(0, 0);
                          }}
                        >
                          <div className="short-thumbnail">
                            <img src={short.thumbnail} alt={short.title} />
                          </div>
                          <div className="short-info">
                            <h3>{short.title}</h3>
                            <p>{short.views}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </main>
        ) : (
          /* WATCH PAGE */
          <main className="watch-container">
            <div className="watch-main">
              <div className="player-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h1 className="watch-title">{currentVideo.title}</h1>
              <p style={{ color: "#aaa", fontSize: "14px" }}>
                {currentVideo.channel} • {currentVideo.views} • {currentVideo.date}
              </p>
            </div>

            <div className="watch-sidebar">
              <h3 style={{ marginBottom: "12px" }}>Tavsiya etiladi</h3>
              {videosData
                .filter((v) => v.id !== currentVideo.id)
                .map((rec) => (
                  <div
                    key={rec.id}
                    className="recommended-card"
                    onClick={() => {
                      setCurrentVideo(rec);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="recommended-thumbnail">
                      <img src={rec.thumbnail} alt={rec.title} />
                    </div>
                    <div className="recommended-info">
                      <h4>{rec.title}</h4>
                      <p>{rec.channel}</p>
                      <p>{rec.views}</p>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}