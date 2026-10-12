import React, { useState, useRef, useEffect } from 'react';

/**
 * VideoMenu komponenti
 * @param {Object} video - Video ma'lumotlari
 * @param {Function} onOptionSelect - Menyudan biror opsiya tanlanganda chaqiriladigan funksiya
 */
export default function VideoMenu({ video, onOptionSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Kartani bosilishini (video ochilishini) to'xtatadi
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (e, action) => {
    e.stopPropagation();
    setIsOpen(false);
    if (onOptionSelect) {
      onOptionSelect(action, video);
    }
  };

  const menuOptions = [
    {
      id: 'queue',
      label: 'Navbatga qo‘shish',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M21 16h-7v-2h7v2zm0-5h-7V9h7v2zm0-5h-11V4h11v2zm-18 0h5v2H3V6zm0 5h5v2H3v-2zm0 5h5v2H3v-2z" />
        </svg>
      ),
    },
    {
      id: 'watch_later',
      label: 'Keyinroq ko‘rishga saqlash',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 10.59V7h-2v6.41l4.3 4.3 1.4-1.42z" />
        </svg>
      ),
    },
    {
      id: 'playlist',
      label: 'Pleyalistga saqlash',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" />
        </svg>
      ),
    },
    {
      id: 'share',
      label: 'Ulashish',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M14 9v-4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" />
        </svg>
      ),
    },
    {
      id: 'not_interested',
      label: 'Qiziq emas',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm5.31-3.1L6.1 5.69C7.45 4.63 9.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
        </svg>
      ),
    },
    {
      id: 'report',
      label: 'Shikoyat qilish',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Uchta nuqta tugmasi */}
      <button
        className="more-button p-1.5 hover:bg-[#272727] rounded-full transition-colors text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Ko'proq опsiyalar"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>

      {/* Ochiluvchi Menyu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-[#212121] text-white rounded-xl shadow-2xl py-2 z-50 border border-[#383838]">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              className="w-full flex items-center gap-4 px-4 py-2.5 hover:bg-[#3f3f3f] text-sm text-left transition-colors"
              onClick={(e) => handleSelect(e, option.id)}
            >
              <span className="text-gray-300">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}