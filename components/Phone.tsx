"use client";
import { IoCall } from "react-icons/io5";
import React from "react";

export default function PhoneFloatingButton() {
  const phoneNumber = "010-4117-7991";

  const handleClick = async () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber.replace(/-/g, "")}`;
    } else {
      // 클립보드 복사 에러 처리 추가
      try {
        await navigator.clipboard.writeText(phoneNumber);
        alert(`연락처: ${phoneNumber}\n\n번호가 자동으로 복사되었습니다!`);
      } catch (err) {
        // 복사 실패 시 대체 방법
        alert(`연락처: ${phoneNumber}\n\n(복사 실패: 수동으로 복사해주세요)`);
      }
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
      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 text-base md:text-lg">
        <IoCall />
      </span>
      <span className="font-semibold text-sm md:text-base px-2 whitespace-nowrap">문의하기</span>
    </button>
  );
}
