"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 화면 크기 변경 시 메뉴 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuItems = ["회사소개", "사업분야", "사업실적"];

  return (
    <>
      <header className="z-50 w-full fixed top-0 py-5 px-4 bg-black/30 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-[1440px] w-full mx-auto">
          <h1 className="m-0 text-white text-xl md:text-2xl font-bold cursor-pointer">대영잠수개발</h1>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:block">
            <ul className="flex gap-10 text-white text-xl font-bold">
              {menuItems.map((item) => (
                <li key={item} className="cursor-pointer hover:text-blue-400 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* 햄버거 버튼 (모바일) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5" aria-label="메뉴">
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 모바일 사이드 메뉴 */}
      <nav className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 pt-24 px-8">
          {menuItems.map((item) => (
            <li key={item} className="text-white text-xl font-bold cursor-pointer hover:text-blue-400 transition-colors py-3 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
