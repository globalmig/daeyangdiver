"use client";

import { useRef, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import ScrollMouse from "@/components/ScrollMouse";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.15;
    }
  }, []);

  return (
    <>
      <section className="relative w-full h-[500px] lg:h-screen overflow-hidden">
        {/* 비디오 */}
        <video ref={videoRef} src="/video/hero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-b-[150px] md:rounded-b-[400px]" />

        {/* 어두운 오버레이 (영상 위 전체 덮음) */}
        <div className="absolute inset-0 bg-black/50 rounded-b-[150px] md:rounded-b-[400px]" />

        {/* 텍스트 오버레이 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-white text-center px-4">
          <p className="text-3xl md:text-5xl font-bold drop-shadow-2xl">대영잠수개발</p>

          <p className="mt-3 drop-shadow-md md:text-xl my-10">경력의 전문 잠수팀이 안전하고 검증된 수중 솔루션을 제공합니다.</p>

          {/* 태그 영역 */}
          <div className="mt-5 flex flex-wrap justify-center w-full gap-2 md:gap-4">
            {["수중공사", "수중촬영", "수중용접", "선박인양", "수중구조물설치"].map((tag) => (
              <div key={tag} className="border px-5 py-2 rounded-full text-sm backdrop-blur-sm bg-white/10">
                #{tag}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll 표시 */}
        <div className="absolute bottom-10 w-full hidden lg:block">
          <ScrollMouse />
        </div>
      </section>

      <section className="py-24 text-center ">
        <h2>사업분야</h2>
        <p>수중용접·절단, 구조물 설치, 수중촬영 등 다양한 해양·수중 공사를 전문적으로 수행합니다.</p>
        <div className="max-w-[1440px] py-10 mx-auto px-4">
          <Hero />
        </div>
      </section>
      {/* 
      <section className="py-24 text-center bg-cover bg-center" style={{ backgroundImage: "url('/image/bg_work2.jpg')" }}> */}
      <section className="py-24 text-center bg-gradient-to-r text-white from-[#0c7380] to-[#002633]">
        <h2>사업실적</h2>
        <p className="px-4">항만 보수, 선박 인양, 구조물 설치 등 다양한 수중 프로젝트를 성공적으로 진행해 온 검증된 실적을 보유하고 있습니다.</p>
        <div className="max-w-[1440px] py-10 mx-auto">
          <Slider />
        </div>
      </section>
      <section className="py-32 w-full  text-start bg-cover bg-bottom text-white mx-auto" style={{ backgroundImage: "url('/image/bg_contact2.jpg')" }}>
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-4">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">견적문의</h2>
            <div className="w-24 h-1.5 bg-white"></div>
          </div>

          <p className="max-w-xl text-2xl leading-relaxed mb-8">
            문의 전화는 언제든 환영합니다. <br />
            부재중일 경우 문자로 남겨주시면 빠르게 회신드리겠습니다.
          </p>

          {/* 연락처 박스 */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-8 py-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-white/80 mb-1">전화 문의</p>

                <a href="tel:010-4117-7991" className="text-3xl font-bold tracking-wider flex gap-4 items-center hover:text-blue-200 transition-colors">
                  <IoCall color="white" />
                  010-4117-7991
                </a>
              </div>
            </div>
          </div>

          {/* 추가 정보 (선택사항) */}
          <div className=" flex flex-wrap gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>평일 09:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>24시간 문자 상담 가능</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-white">
        <h2>주요 업무</h2>
        <p>수중 용접 및 절단, 수중 촬영, 구조물 설치, 침몰 선박 인양, 하수처리장 보수·정비 등 전문 수중 공사 서비스를 제공합니다.</p>

        <Link href="/business?tab=underwater-welding" className="card-List grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 max-w-[1440px] py-10 mx-auto px-4">
          <div className="card-item border bg-black/10 rounded-xl overflow-hidden relative h-96 md:h-[440px] group">
            <Image src="/image/수중용접.jpg" alt="수중용접" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h4 className="text-white">수중 용접·절단</h4>
            </div>
          </div>

          <Link href={"/business?tab=underwater-camera"} className="card-item border bg-black/10 rounded-xl overflow-hidden relative h-96 md:h-[440px] group">
            <Image src="/image/camera.jpg" alt="수중 촬영" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h4 className="text-white">수중 촬영</h4>
            </div>
          </Link>

          <div className="card-item border bg-black/10 rounded-xl overflow-hidden relative h-96 md:h-[440px] group">
            <Image src="/image/구조물설치.png" alt="구조물설치" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h4 className="text-white">구조물 설치</h4>
            </div>
          </div>

          <div className="card-item border bg-black/10 rounded-xl overflow-hidden relative h-96 md:h-[440px] group">
            <Image src="/image/인양작업2.jpg" alt="인양작업" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h4 className="text-white">침몰 선박 인양</h4>
            </div>
          </div>

          <div className="card-item border bg-black/10 rounded-xl overflow-hidden relative h-96 md:h-[440px] group">
            <Image src="/image/hasu.jpg" alt="하수처리장 보수·정비" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h4 className="text-white">하수처리장 보수·정비</h4>
            </div>
          </div>
        </Link>
      </section>

      <section className="w-full py-24 bg-gradient-to-r text-white from-[#0c7380] to-[#002633]">
        <div className="max-w-7xl mx-auto px-4">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h2 className="mb-4">오시는 길</h2>
            {/* <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div> */}
          </div>

          {/* 지도와 정보 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 지도 */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.803595661817!2d129.0453001!3d35.1365745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebbeac35f147%3A0x3a14e0b8eab5c66!2z67aA7IKw6rSR7Jet7IucIOuPmeq1rCDsiJjsoJXqs7Xsm5DroZwgMTUxLTI!5e0!3m2!1sko!2skr!4v1763698797817!5m2!1sko!2skr"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>

            {/* 상세 정보 */}
            <div className="space-y-6 ">
              {/* 주소 카드 */}
              <div className="bg-white/20 border border-white/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold  mb-4 flex items-center gap-2">
                  {/* <span className="text-2xl">📍</span> */}
                  주소
                </h3>
                <p className=" leading-relaxed">
                  부산광역시 동구 수정공원로 151-2 <br /> 대영 잠수 개발(주)
                </p>
              </div>

              {/* 연락처 카드 */}
              <div className="bg-white/20 border border-white/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold  mb-4 flex items-center gap-2">
                  {/* <span className="text-2xl">📞</span> */}
                  연락처
                </h3>
                <div className="space-y-2 ">
                  <p>전화: 010-4117-7991</p>
                  <p>팩스: 064-763-7993</p>
                </div>
              </div>

              {/* 교통편 카드 */}
              {/* <div className="bg-white/20 border border-white/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"> */}
              {/* <span className="text-2xl">🚇</span> */}
              {/* 대중교통 */}
              {/* </h3>
                <div className="space-y-2  text-sm">
                  <p>• 지하철 1호선 XX역 X번 출구</p>
                  <p>• 버스 XX, XX, XX번</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
