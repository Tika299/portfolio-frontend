import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  // Đảm bảo quét qua các file trong thư mục app và components
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Bạn có thể thêm các tùy chỉnh theme ở đây nếu cần
    },
  },
  plugins: [
    typography, // Xử lý Markdown đẹp
    animate,    // Xử lý các hiệu ứng animation (Shadcn/UI cần cái này)
  ],
};

export default config;