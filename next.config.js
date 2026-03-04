/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 콘텐츠 개별 페이지
      {
        source: '/content/:slug',
        destination: 'https://nntuztaehnywdbttrajy.supabase.co/functions/v1/geobh-content-page?slug=uniqlo&page=:slug'
      },
      // 콘텐츠 목록
      {
        source: '/content',
        destination: 'https://nntuztaehnywdbttrajy.supabase.co/functions/v1/geobh-content-page?slug=uniqlo'
      },
      // 메인 브랜드허브 페이지
      {
        source: '/',
        destination: 'https://nntuztaehnywdbttrajy.supabase.co/functions/v1/geobh-page?slug=uniqlo'
      }
    ]
  }
}
module.exports = nextConfig
