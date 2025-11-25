import React from "react";
import Image from "next/image";

export default function page() {
  const images: string[] = [
    "/image/camera.jpg",
    "/image/work1.jpg",
    "/image/work2.jpg",
    "/image/work3.jpg",
    "/image/work4.jpg",
    "/image/구조물설치.png",
    "/image/work5.jpg",
    "/image/work6.jpg",
    "/image/수중용접.jpg",
    "/image/hasu.jpg",
  ];

  return (
    <div className="relative flex flex-col items-center">
      {/* 1. sticky hero 영역 */}
      <div className="sticky top-0 w-full">
        <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
          <Image src="/image/hero_gallery.jpg" alt="회사 소개 이미지" fill className="absolute object-cover object-top" />
          <div className="flex flex-col justify-center items-center mt-10 relative">
            <p className="text-3xl md:text-4xl font-bold text-white">사업실적</p>
            <p className="text-xl md:text-2xl text-white/70 font-light mt-2 tracking-[0.2em] uppercase">gallery</p>
          </div>
        </div>
      </div>

      {/* 2. 아래 스크롤 영역 */}
      <section className="w-full bg-white rounded-2xl p-6 shadow-md z-10 py-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center md:items-start">
          {images.map((src, i) => (
            <div key={i} className="w-full h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <Image src={src} alt="회사 소개 이미지" width={600} height={400} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
