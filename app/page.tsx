"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // 재생속도 0.7배
    }
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      <video ref={videoRef} src="/video/hero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />

      {/* 텍스트 오버레이 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-3xl font-bold drop-shadow-2xl">공인잠수개발</p>
        <p className="mt-2 drop-shadow-md">수중 용접 및 절단, 수중촬영, 수중구조물설치, 침몰선박인양,</p>
        <p className="drop-shadow-md">하수처리장 보수 및 수리 등</p>

        <div className="mt-4 border px-5 py-2 rounded-full inline-block text-sm backdrop-blur-sm bg-white/10 mx-2">#수중공사</div>
        <div className="mt-4 border px-5 py-2 rounded-full inline-block text-sm backdrop-blur-sm bg-white/10 mx-2">#수중촬영</div>
        <div className="mt-4 border px-5 py-2 rounded-full inline-block text-sm backdrop-blur-sm bg-white/10 mx-2">#수중용접</div>
        <div className="mt-4 border px-5 py-2 rounded-full inline-block text-sm backdrop-blur-sm bg-white/10 mx-2">#선박인양</div>
        <div className="mt-4 border px-5 py-2 rounded-full inline-block text-sm backdrop-blur-sm bg-white/10 mx-2">#수중구조물설치</div>
      </div>
    </div>
  );
}
