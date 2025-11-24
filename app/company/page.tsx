import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative flex flex-col items-center">
      {/* 1. sticky hero 영역 */}
      <div className="sticky top-0 w-full">
        <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
          <Image src="/image/company2.jpg" alt="회사소개이미지" fill className="absolute object-cover object-top" />
          <div className="flex flex-col justify-center items-center mt-10 relative">
            <p className="text-3xl md:text-4xl font-bold text-white">회사소개</p>
            <p className="text-xl md:text-2xl text-white/60 font-thin mt-2">company</p>
          </div>
        </div>
      </div>

      {/* 2. 아래 스크롤 영역 */}
      <section className="w-full bg-white rounded-2xl p-6 md:p-12 shadow-md z-10 py-16 flex flex-col items-center gap-20">
        {/* 1. ABOUT SECTION */}
        <div className="w-full max-w-[1440px] flex lg:flex-row flex-col gap-10 justify-between items-center md:items-start">
          {/* 텍스트 */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#079aca] font-semibold tracking-wider text-sm uppercase">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">신뢰와 경험으로 완성되는 수중 전문 서비스</h2>
            <p className="mt-8 text-gray-600 leading-relaxed text-base md:text-lg">
              다양한 현장에서 쌓아온 실무 경험을 바탕으로 믿고 맡길 수 있는 수중 전문 팀입니다.
              <br />
              <br className="hidden md:block" />
              수중 용접·절단, 수중촬영, 구조물 설치, 침몰 선박 인양, 하수처리장 보수 및 수리 등 정밀함이 요구되는 모든 수중 작업을 책임지고 수행합니다.
              <br />
              <br className="hidden md:block" />
              작업 문의는 언제든 전화 주시면 자세히 안내해 드립니다.
              <br />
              <br className="hidden md:block" />
              통화가 어려운 시간에는 문자로 남겨주시면 작업을 마치는 대로 빠르게 연락드리겠습니다.
            </p>
          </div>
          {/* 이미지 */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src="/image/company.png" alt="회사 소개 이미지" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        {/* 2. CEO SECTION */}
        <div className="w-full max-w-[1440px] flex lg:flex-row flex-col-reverse gap-10 justify-between items-center md:items-start">
          {/* 이미지 */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src="/image/SEO.jpg" alt="CEO 이미지" fill className="object-cover" />
            </div>
          </div>
          {/* 텍스트 */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#079aca] font-semibold tracking-wider text-sm uppercase">CEO PROFILE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">대표이사 약력</h2>

            <div className="mt-8 p-6 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 leading-relaxed shadow-sm ">
              <p className="mb-2">• 1991년 대양잠수개발 창립 </p>
              <p className="mb-2">• 1996년 대양잠수개발(주)</p>
              <p className="mb-2">• 대한민국 해군사관학교 41기</p>
              <p className="mb-2">• 대한민국 해군 SSU전단장 대령 전역</p>
              <p className="mb-2">• 대양잠수개발 대표잠수사</p>
              <p className="mb-2">• 대양잠수개발 심해잠수사</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gradient-to-r text-white from-[#0c7380] to-[#002633] z-10">
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
    </div>
  );
}
