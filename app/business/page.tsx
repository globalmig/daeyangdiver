"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const businessList = [
  {
    id: "underwater-construction",
    label: "수중공사",
    title: "수중공사",
    image: "/image/work2.jpg",
    alt: "수중공사 이미지",
    description:
      "다양한 항만 및 해양 구조물 현장에서 신규 시설 설치부터 노후 시설 보수까지 폭넓은 수중 작업을 수행합니다. 전문 잠수팀이 현장 환경에 맞춰 안전하고 정확하게 공사를 진행하며, 각종 수중 설비 설치·해체 작업도 함께 제공합니다.",
    works: ["항만·해양 구조물 신규 제작 및 설치", "손상된 시설 보수·보강", "노후 구조물 점검 및 철거"],
  },
  {
    id: "underwater-camera",
    label: "수중촬영",
    title: "수중촬영",
    image: "/image/camera.jpg",
    alt: "수중촬영 이미지",
    description: "전문 촬영 잠수사와 고해상도 장비를 활용해 공사 전 조사, 시설 상태 분석, 해저 환경 파악 등 다양한 목적의 수중 촬영 및 점검 작업을 수행합니다.",
    works: ["수중 구조물 상태 점검", "해저 지형·구조물 조사 및 분석", "공사 전·후 영상 및 사진 기록"],
  },
  {
    id: "underwater-welding",
    label: "수중용접",
    title: "수중용접",
    image: "/image/수중용접.jpg",
    alt: "수중용접 이미지",
    description: "전문 잠수사와 특수 장비를 통해 수중에서의 용접 및 절단 작업을 안전하게 수행합니다. 해양 구조물, 선박, 항만 시설 등에 대해 정밀한 용접·절단 및 보수 작업이 가능합니다.",
    works: [
      "해양 및 하천 구조물 수중용접 시공",
      "부식 또는 손상 부위 절단 및 철거",
      "파일, 철제 구조물 용접 및 연결 작업",
      "긴급 보수 시공 및 구조물 강화 작업",
      "음향탐지 비파괴 검사(NDT)를 통한 품질 관리",
    ],
  },
  {
    id: "ship-salvage",
    label: "인양/설치",
    title: "선박 인양",
    image: "/image/work1.jpg",
    alt: "선박 인양 이미지",
    description: "침몰된 선박, 장비, 구조물 등을 안전하고 효율적으로 인양하는 전문 작업을 제공합니다. 현장 여건을 상세 분석한 후 최적의 인양 계획을 수립해 안정적인 작업을 진행합니다.",
    works: ["침몰 선박 및 해양 장비 인양", "구조물 및 해저 투하물 회수 작업", "대형 구조물 인양 설계 및 시공", "부선·크레인 등 장비 활용 인양 작업"],
  },
];

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultId = businessList[0].id;
  const [activeId, setActiveId] = useState<string>(defaultId);

  // URL 의 ?tab= 값 → 상태 반영
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && businessList.some((b) => b.id === tabFromUrl)) {
      setActiveId(tabFromUrl);
    } else {
      setActiveId(defaultId);
    }
  }, [searchParams, defaultId]);

  const activeItem = businessList.find((item) => item.id === activeId)!;

  const handleTabClick = (id: string) => {
    setActiveId(id);

    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);

    // 경로 + 쿼리스트링 업데이트 (스크롤 유지)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* 1. sticky hero 영역 */}
      <div className="sticky top-0 w-full ">
        <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
          <Image src="/image/hero_business.jpg" alt="회사 소개 이미지" fill className="absolute object-cover object-top" />
          <div className="flex flex-col justify-center items-center mt-10 relative">
            <p className="text-3xl md:text-4xl font-bold text-white drop-shadow">사업분야</p>
            <p className="text-xl md:text-2xl text-white/70 font-light mt-2 tracking-[0.2em] uppercase">business</p>
          </div>
        </div>
      </div>

      {/* 2. 아래 스크롤 영역 */}
      <section className="w-full bg-white rounded-t-2xl p-6 md:p-10 shadow-md z-10 flex flex-col items-center -mt-4">
        {/* 사업분야 탭 */}
        <div className="sticky top-[80px] md:top-[70px] z-20 w-full max-w-[1440px] bg-white/90 backdrop-blur border-b border-gray-100">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full py-3 md:py-4">
            {businessList.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl w-full transition
                  ${activeId === item.id ? "bg-[#079aca] text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 선택된 사업분야 내용 */}
        <div className="mt-10 md:mt-12 flex flex-col gap-8 md:gap-12 justify-center items-center w-full max-w-[1440px] pb-32">
          {/* 이미지 + 정보 2단 레이아웃 */}
          <div className="w-full grid md:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* 이미지 영역 */}
            <div className="md:col-span-3">
              <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
                <Image src={activeItem.image} alt={activeItem.alt} fill className="object-cover" />
              </div>
            </div>

            {/* 텍스트 정보 영역 */}
            <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full border mb-1 border-[#079aca]/30 bg-[#079aca]/5 px-3 py-1 text-xs font-medium text-[#079aca]">DAEYANG DIVER SERVICE</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{activeItem.title}</h3>
                <p className="text-sm md:text-base text-gray-500">현장 여건에 맞는 맞춤형 계획 수립과 안전 시스템을 기반으로 전문적인 수중 서비스를 제공합니다.</p>
              </div>

              <div className="rounded-xl bg-gray-100 border border-gray-100 p-4 md:p-5 text-sm md:text-base leading-relaxed text-gray-700">{activeItem.description}</div>

              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-gray-600">
                <div className="rounded-xl bg-white border border-gray-300 p-3">
                  <p className="font-semibold text-gray-800 mb-1">작업 환경</p>
                  <p>항만 · 하천 · 댐 · 해양 구조물 등 다양한 수역</p>
                </div>
                <div className="rounded-xl bg-white border border-gray-300 p-3">
                  <p className="font-semibold text-gray-800 mb-1">서비스 특징</p>
                  <p>전문 잠수팀, 체계적인 안전관리, 실시간 상황 공유</p>
                </div>
              </div>
            </div>
          </div>

          {/* 주요 업무 리스트 */}
          <div className="w-full rounded-2xl border border-gray-100 bg-gray-50/80 px-5 md:px-8 py-6 md:py-8">
            <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">주요 업무</h4>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{activeItem.title}과(와) 관련된 대표적인 업무 항목입니다.</p>
              </div>
            </div>

            <ul className="mt-2 space-y-2 md:space-y-2.5">
              {activeItem.works.map((work) => (
                <li key={work} className="flex items-start gap-2 text-sm md:text-base text-gray-800">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#079aca]" />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
