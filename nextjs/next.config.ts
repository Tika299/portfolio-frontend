/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cho phép Next.js xử lý ảnh từ Laravel
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
    // Thêm dòng này để hỗ trợ các thiết bị/trình duyệt cũ nếu cần
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;