import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// ✅ SEO 메타데이터
export const metadata: Metadata = {
  metadataBase: new URL("https://www.daeyangdiver.com"), // ✅ 실제 도메인으로 교체
  title: {
    default: "대양잠수개발(주) | 수중공사·선박 인양·수중용접 전문",
    template: "%s | 대양잠수개발(주)",
  },
  description: "수중 용접 및 절단, 수중 촬영, 구조물 설치, 침몰 선박 인양, 하수처리장 보수·정비 등 다양한 수중 공사를 전문적으로 수행하는 대양잠수개발(주)입니다.",
  keywords: ["대양잠수개발", "수중공사", "수중용접", "수중절단", "선박 인양", "수중 촬영", "구조물 설치", "하수처리장 보수", "수중 작업"],
  authors: [{ name: "대양잠수개발(주)", url: "https://www.daeyangdiver.com" }],
  openGraph: {
    type: "website",
    url: "https://www.daeyangdiver.com",
    title: "대양잠수개발(주) | 수중공사·선박 인양·수중용접 전문",
    description: "경력의 전문 잠수팀이 수중용접·절단, 선박 인양, 수중촬영, 구조물 설치 등 해양·수중 공사를 안전하게 수행합니다.",
    siteName: "대양잠수개발(주)",
    images: [
      {
        url: "https://www.daeyangdiver.com/image/SEO.png", // ✅ OG 이미지 경로 (실제 파일 경로로 변경)
        width: 1200,
        height: 630,
        alt: "대양잠수개발 수중공사 대표 이미지",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "대양잠수개발(주) | 수중공사·선박 인양·수중용접 전문",
    description: "수중 용접·절단, 구조물 설치, 선박 인양 등 다양한 수중 공사를 전문적으로 수행하는 대양잠수개발(주)입니다.",
    images: ["https://www.daeyangdiver.com/image/SEO.png"],
  },
  alternates: {
    canonical: "https://www.daeyangdiver.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "naver-site-verification": "2c73ed52195e9b3c986a56f2b94b082c476e8424",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased relative min-h-screen">
        <Header />
        <main className="flex-1 min-h-screen">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>

        {/* ✅ 구조화 데이터 (JSON-LD) – LocalBusiness / 수중공사 업체 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "대양잠수개발(주)",
              url: "https://www.daeyangdiver.com", // ✅ 실제 도메인
              description: "수중 용접 및 절단, 수중촬영, 구조물 설치, 침몰 선박 인양, 하수처리장 보수·정비 등 전문 수중 공사 서비스를 제공하는 대양잠수개발(주)입니다.",
              telephone: "010-4117-7991",
              faxNumber: "064-763-7993",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR",
                addressLocality: "부산광역시",
                addressRegion: "동구",
                streetAddress: "수정공원로 151-2",
              },
              // 제주 지점은 서브 조직으로 처리
              subOrganization: {
                "@type": "LocalBusiness",
                name: "대양잠수개발(주) 제주 지점",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "KR",
                  addressLocality: "제주특별자치도 서귀포시",
                  addressRegion: "서귀동",
                  streetAddress: "중정로 34, 502호 (천지연리슈빌)",
                },
                telephone: "064-763-7992",
              },
              areaServed: ["대한민국", "부산", "제주"],
            }),
          }}
        />
      </body>
    </html>
  );
}
