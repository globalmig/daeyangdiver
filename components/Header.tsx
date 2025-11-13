import React from "react";

export default function Header() {
  return (
    <div className="z-10 w-full fixed py-5 px-4">
      <div className="flex justify-between items-center max-w-[1440px] w-full mx-auto">
        <h1 className="m-0 text-white">대영잠수개발</h1>
        <ul className="flex gap-10 text-white text-xl font-bold">
          <li>회사소개</li>
          <li>사업분야</li>
          <li>사업실적</li>
        </ul>
      </div>
    </div>
  );
}
