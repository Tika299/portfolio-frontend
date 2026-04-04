/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co', // Cho phép tất cả domain Supabase
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Thêm dòng này để hỗ trợ các thiết bị/trình duyệt cũ nếu cần
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;