import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">대영 잠수 개발(주)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">전문 잠수 및 수중 작업 전문 기업</p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>전화: 010-4117-7991</li>
              <li>팩스: 064-763-7993</li>
              <li>이메일: info@daeyoungdive.com</li>
              <li>
                주소: 서귀포시 중정로 34,502호
                <br /> (서귀동, 천지연리슈빌)
              </li>
            </ul>
          </div>

          {/* 사업 분야 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">사업 분야</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>수중 용접·절단</li>
              <li>수중 촬영</li>
              <li>구조물 설치</li>
              <li>침몰 선박 인양</li>
              <li>하수처리장 보수·정비</li>
            </ul>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 대영 잠수 개발(주). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
