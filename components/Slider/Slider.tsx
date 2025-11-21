"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import "./Slider.module.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";

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
        modules={[Grid, Pagination]}
        className="mySwiper h-96"
      >
        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
