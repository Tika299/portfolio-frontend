// types/index.ts

// 1. Định nghĩa Công nghệ (Dùng chung cho cả Project và Post)
export interface Technology {
  id: number;
  name: string;
  slug: string;
  icon?: string; // Có thể có hoặc không
}

// 2. Định nghĩa Dự án (Project)
export interface Project {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  thumbnail: string;
  demo_url?: string;
  github_url?: string;
  created_at: string;
  technologies: Technology[];
}

// 3. Định nghĩa Bài viết (Post/Blog)
export interface Post {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  cover_image: string;
  views: number;
  is_published: boolean;
  published_at: string;
}

// 4. Định nghĩa cấu trúc API trả về từ Laravel (Optional nhưng rất chuyên nghiệp)
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}