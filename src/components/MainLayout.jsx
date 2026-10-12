import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CategoryBar from './CategoryBar';

/**
 * MainLayout komponenti
 * @param {React.ReactNode} children - Sahifa kontenti (masalan, VideoGrid yoki Watch page)
 * @param {boolean} showCategoryBar - Kategoriya panelini ko'rsatish/yashirish (defolt: true)
 */
export default function MainLayout({ children, showCategoryBar = true }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Menyuni ochish/yopish funksiyasi
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1]">
      {/* Teparoq Navbar */}
      <Header onMenuClick={toggleSidebar} />

      <div className="flex pt-[56px]">
        {/* Chap Menyu (Sidebar) */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Asosiy kontent maydoni */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? 'ml-[240px]' : 'ml-[72px]'
          }`}
        >
          {/* Kategoriya paneli (agar yoqilgan bo'lsa) */}
          {showCategoryBar && (
            <div
              className={`fixed top-[56px] right-0 z-40 bg-[#0f0f0f] transition-all duration-300 ${
                isSidebarOpen ? 'left-[240px]' : 'left-[72px]'
              }`}
            >
              <CategoryBar />
            </div>
          )}

          {/* Sahifa kontenti */}
          <main
            className={`p-6 ${
              showCategoryBar ? 'pt-[72px]' : 'pt-6'
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}