#  Modern Fullstack Portfolio - Frontend (Next.js 15)

Trang web Portfolio cá nhân được xây dựng với mục tiêu mang lại trải nghiệm người dùng mượt mà, tốc độ tải trang tối ưu và chuẩn SEO mạnh mẽ. Dự án đóng vai trò là "mặt tiền" hiển thị các dự án tâm huyết và kiến thức chuyên môn từ hệ thống CMS Backend.

##  Live Demo
 **[Xem Portfolio trực tiếp tại đây](http://xuanvu.ttperfume.vn/)** 
*(Lưu ý: Backend sử dụng Render Free nên lần đầu truy cập có thể mất vài giây để khởi động).*

##  Tech Stack (Công nghệ sử dụng)
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript (Type-safe development)
*   **Styling:** Tailwind CSS + Shadcn/UI (Modern Design System)
*   **Animation:** Framer Motion (Smooth page transitions & interactions)
*   **Markdown:** React Markdown + GitHub Markdown CSS (Professional technical docs)
*   **State Management:** React Server Components (RSC) cho tốc độ load tối đa.

##  Tính năng nổi bật
*   **Hybrid Rendering (SSG & ISR):** Kết hợp tạo trang tĩnh lúc Build và cập nhật dữ liệu sau khi Deploy, giúp trang Project và Blog load gần như tức thì.
*   **GitHub-style Portfolio:** Nội dung chi tiết dự án được render từ Markdown, mang lại giao diện chuyên nghiệp như tệp README trên GitHub.
*   **Responsive Design:** Tối ưu hóa hiển thị trên mọi thiết bị (Mobile, Tablet, Desktop).
*   **Dark/Light Mode:** Hỗ trợ chuyển đổi giao diện sáng/tối tự động dựa trên cấu hình hệ điều hành người dùng.
*   **SEO & Metadata:** Tối ưu Metadata động cho từng route, đảm bảo ảnh Preview hiện đẹp khi chia sẻ qua LinkedIn/Facebook.
*   **Performance:** Điểm số tối ưu trên Google PageSpeed Insights nhờ cơ chế Image Optimization của Next.js.

##  Cấu trúc thư mục tiêu biểu
```text
nextjs/
├── app/                  # App Router logic
│   ├── [locale]/         # Đa ngôn ngữ (i18n)
│   ├── projects/         # Trang danh sách & chi tiết dự án
│   └── blog/             # Trang kiến thức kỹ thuật
├── components/           # UI Components (Shadcn + Custom)
├── lib/                  # Các hàm fetch API & logic chung
├── types/                # Định nghĩa Interface TypeScript tập trung
└── public/               # Tài nguyên tĩnh (Logo, Avatars)
```

##  Cài đặt & Chạy dưới Local
1. **Clone repository:**
   ```bash
   git clone https://github.com/Tika299/portfolio-frontend.git
   cd nextjs
   ```
2. **Cài đặt thư viện:**
   ```bash
   npm install
   ```
3. **Cấu hình biến môi trường:** Tạo file `.env.local` ở thư mục gốc:
   ```env
   NEXT_PUBLIC_API_URL=https://portfolio-backend-ubup.onrender.com/api
   NEXT_PUBLIC_STORAGE_URL=https://portfolio-backend-ubup.onrender.com/storage
   ```
4. **Chạy chế độ Development:**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: `http://localhost:3000`

##  Deployment
Dự án được triển khai tự động qua **Vercel** tích hợp với quy trình CI/CD từ GitHub. Mọi thay đổi khi `git push` sẽ được kiểm tra và cập nhật bản build mới nhất trong vài giây.

---
**Được xây dựng bởi Lê Xuân Vũ.**  
*Nếu bạn thấy dự án này thú vị, hãy cho mình 1  nhé!*
