import React from 'react';

/**
 * Avatar komponenti
 * @param {string} src - Rasm havolasi (avatar URL)
 * @param {string} alt - Kanal yoki foydalanuvchi nomi
 * @param {string} size - Avatar hajmi ('sm', 'md', 'lg' yoki xohlagan o'lcham)
 * @param {string} className - Qo'shimcha CSS sinflari
 */
export default function Avatar({ src, alt = "Channel Avatar", size = "md", className = "" }) {
  // Har xil joylar uchun o'lchamlar xaritasi
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",   // Header profil yoki kichik kartalar uchun
    md: "w-9 h-9 text-sm",   // VideoCard uchun (standart)
    lg: "w-10 h-10 text-base" // Watch page / VideoInfo uchun
  };

  // Agar src bo'lmasa, ismning birinchi harfini ko'rsatish
  const fallbackLetter = alt ? alt.charAt(0).toUpperCase() : "U";

  return (
    <div className={`relative flex-shrink-0 rounded-full overflow-hidden bg-[#272727] flex items-center justify-center font-semibold text-white ${sizeClasses[size] || sizeClasses.md} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Rasm yuklanmay qolsa, yashirish va fallback ko'rsatish
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <span>{fallbackLetter}</span>
      )}
    </div>
  );
}