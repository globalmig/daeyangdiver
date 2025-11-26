/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.daeyangdiver.com", // ⭐ 실제 도메인
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000, // 페이지 많아질 때 자동 분할
  changefreq: "daily",
  priority: 0.7,

  // ⭐ 동적 라우트가 있는 경우 예외/추가 설정 가능
  //   exclude: ["/admin/*"],                   // 제외할 경로
};
