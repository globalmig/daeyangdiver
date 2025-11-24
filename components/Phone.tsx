"use client";
import { IoCall } from "react-icons/io5";
import React from "react";

export default function PhoneFloatingButton() {
  const phoneNumber = "010-4117-7991"; // 👉 번호만 바꾸면 됨!

  const handleClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // 모바일에서는 전화 연결
      window.location.href = `tel:${phoneNumber.replace(/-/g, "")}`;
    } else {
      // PC에서는 알럿 + 클립보드 복사
      navigator.clipboard.writeText(phoneNumber);
      alert(`연락처: ${phoneNumber}\n\n번호가 자동으로 복사되었습니다!`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        px-4 py-3
        rounded-full
        bg-[#079aca]
        text-white
        shadow-xl
        hover:bg-[#0681b0]
        active:scale-95
        transition
        backdrop-blur-md
      "
    >
      <span className="inline-flex items-center justify-center w-8 h-8 md:w-7 md:h-7 rounded-full bg-white/20 text-lg md:text-base">
        <IoCall color="white" />
      </span>
      <span className="font-semibold text-sm md:text-lg px-2 whitespace-nowrap">문의하기</span>
    </button>
  );
}
