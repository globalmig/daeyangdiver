"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import "./Slider.module.css";
import Image from "next/image";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // 3초마다 자동 이동
          disableOnInteraction: false, // 유저가 슬라이드 건드려도 autoplay 계속
          pauseOnMouseEnter: true, // 마우스 올리면 멈춤 (원하면 지워도 됨)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: { rows: 2 },
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            grid: { rows: 2 },
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            grid: { rows: 2 },
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 },
            spaceBetween: 20,
          },
        }}
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper h-[800px]"
      >
        <SwiperSlide>
          <Image src="/image/구조물설치.png" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work1.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work2.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work3.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work4.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work5.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/work6.jpg" alt="구조물설치" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/수중용접.jpg" alt="수중용접" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/선박수중작업.png" alt="선박수중작업" fill className="object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image/소나사운드.png" alt="소나사운드" fill className="object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
