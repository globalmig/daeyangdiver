"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.module.css";

import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[400px] md:h-[600px] bg-black rounded-3xl"
      >
        <SwiperSlide>
          <Image src="/image/수중용접.jpg" alt="수중용접" fill className="object-cover" />
          {/* 오버레이 텍스트 영역 */}
          <div className="absolute bottom-10  left-6  md:left-20 text-white text-left border-l-4 pl-4 md:pl-10">
            {/* 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold drop-shadow-lg text-shadow">수중용접</h2>

            {/* 설명 */}
            <p className="text-base sm:text-lg md:text-4xl mt-1 opacity-90 text-shadow">전문 장비로 진행하는 고난이도 수중 용접 작업</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/camera.jpg" alt="수중 촬영" fill className="object-cover" />
          {/* 오버레이 텍스트 영역 */}
          <div className="absolute bottom-10  left-6  md:left-20 text-white text-left border-l-4 pl-4 md:pl-10">
            {/* 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold drop-shadow-lg text-shadow">수중 촬영</h2>

            {/* 설명 */}
            <p className="text-base sm:text-lg md:text-4xl mt-1 opacity-90 text-shadow">선명한 영상으로 수중 환경을 정확하게 기록</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/구조물설치.png" alt="구조물설치" fill className="object-cover" />
          {/* 오버레이 텍스트 영역 */}
          <div className="absolute bottom-10  left-6  md:left-20 text-white text-left border-l-4 pl-4 md:pl-10">
            {/* 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold drop-shadow-lg text-shadow">구조물 설치</h2>

            {/* 설명 */}
            <p className="text-base sm:text-lg md:text-4xl mt-1 opacity-90 text-shadow">수중 환경의 전문 인력이 구조물을 정확하고 안전하게 설치</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/hasu.jpg" alt="하수처리장 보수·정비" fill className="object-cover" />
          {/* 오버레이 텍스트 영역 */}
          <div className="absolute bottom-10  left-6  md:left-20 text-white text-left border-l-4 pl-4 md:pl-10">
            {/* 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold drop-shadow-lg text-shadow">하수처리장 보수·정비</h2>

            {/* 설명 */}
            <p className="text-base sm:text-lg md:text-4xl mt-1 opacity-90 text-shadow">하수처리 시설의 안정적 운영을 위한 전문 보수·정비 서비스</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
