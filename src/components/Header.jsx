export default function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn">
          <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
        <div className="youtube-logo" onClick={onLogoClick} style={{ cursor: "pointer" }}>
          <div className="youtube-logo-shape">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span>YouTube</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search">
          <input type="text" placeholder="Qidiruv" />
          <button className="search-btn">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>
        <button className="mic-btn">
          <svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg>
        </button>
      </div>

      <div className="header-right">
        <button className="create-btn">+ Yaratish</button>
        <div className="profile">U</div>
      </div>
    </header>
  );
}