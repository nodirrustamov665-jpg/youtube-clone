const mainItems = [
  {
    title: "Home",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Shorts",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17.77 10.2l-2.12-1.22 2.11-1.22a4.1 4.1 0 00-4.1-7.1L11.55 1.9A4.1 4.1 0 007.44 9l2.1 1.2-2.1 1.22a4.1 4.1 0 004.1 7.1l2.11-1.22a4.1 4.1 0 004.12-7.1zm-7.1-1.82a2.1 2.1 0 112.1-3.64l3.01 1.74-5.11 2.95a2.1 2.1 0 010-1.05zm2.99 9.1a2.1 2.1 0 11-2.1-3.64l5.11-2.95v3.48l-3.01 1.74z" />
      </svg>
    ),
  },
  {
    title: "Subscriptions",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 8.5a2.5 2.5 0 00-2.5-2.5h-11A2.5 2.5 0 004 8.5v7A2.5 2.5 0 006.5 18h11a2.5 2.5 0 002.5-2.5v-7zM9 15V9l5 3-5 3z" />
      </svg>
    ),
  },
];

const youItems = [
  {
    title: "History",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 3a9 9 0 00-8.94 8H2l3.5 3.5L9 11H6.06A7 7 0 1113 18a7 7 0 01-4.95-2.05l-1.41 1.41A9 9 0 1013 3zm-1 4v6l5 3 .99-1.64L14 11.9V7h-2z" />
      </svg>
    ),
  },
  {
    title: "Playlists",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
      </svg>
    ),
  },
  {
    title: "Watch later",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 10.59V7h-2v6.41l4.3 4.3 1.4-1.42z" />
      </svg>
    ),
  },
  {
    title: "Liked videos",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M18 8h-5.05l.72-3.4.02-.26A2.34 2.34 0 0011.35 2L7 7.35V21h10.55A2.45 2.45 0 0019.94 19l1.01-8A2.5 2.5 0 0018 8zM5 7H2v14h3V7z" />
      </svg>
    ),
  },
];

const exploreItems = [
  {
    title: "Music",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3v12.55A4 4 0 1014 19V8h5V3h-7z" />
      </svg>
    ),
  },
  {
    title: "Live",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 7a9 9 0 000 10l1.5-1.5a7 7 0 010-7L5 7zm14 0l-1.5 1.5a7 7 0 010 7L19 17a9 9 0 000-10zM9 9a5 5 0 000 6l1.5-1.5a3 3 0 010-3L9 9zm6 0l-1.5 1.5a3 3 0 010 3L15 15a5 5 0 000-6zM12 11a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
  },
  {
    title: "Gaming",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M7 6h10a5 5 0 014.9 6l-1.2 6a2.5 2.5 0 01-4.3 1.1L14 16h-4l-2.4 3.1A2.5 2.5 0 013.3 18l-1.2-6A5 5 0 017 6zm0 3v2H5v2h2v2h2v-2h2v-2H9V9H7zm8 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    ),
  },
];

function SidebarItem({ item, active }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span className="sidebar-icon">
        {item.icon}
      </span>

      <span className="sidebar-text">
        {item.title}
      </span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        {mainItems.map((item, index) => (
          <SidebarItem
            key={item.title}
            item={item}
            active={index === 0}
          />
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-heading">
          You
          <span>›</span>
        </div>

        {youItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-heading">
          Explore
        </div>

        {exploreItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-heading">
          More from YouTube
        </div>

        <div className="sidebar-item">
          <span className="sidebar-icon youtube-small">
            ▶
          </span>
          <span className="sidebar-text">
            YouTube Premium
          </span>
        </div>

        <div className="sidebar-item">
          <span className="sidebar-icon">
            Y
          </span>
          <span className="sidebar-text">
            YouTube Music
          </span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div>About &nbsp; Press &nbsp; Copyright</div>
        <div>Contact us &nbsp; Creators</div>
        <div>Advertise &nbsp; Developers</div>

        <br />

        <div>Terms &nbsp; Privacy &nbsp; Policy & Safety</div>
        <div>How YouTube works</div>
        <div>Test new features</div>

        <p>© 2026 Google LLC</p>
      </div>
    </aside>
  );
}
