import { getPosts } from "@/lib/api";
import Link from "next/link";
import { format } from "date-fns"; // npm install date-fns để format ngày tháng
import { Calendar, Clock, ChevronRight } from "lucide-react";

import { Post } from "@/types"; // Import kiểu dữ liệu Post từ types/index.ts

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="container mx-auto py-20 px-6 max-w-4xl">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ký sự lập trình</h1>
        <p className="text-muted-foreground text-lg">Chia sẻ về công nghệ, kinh nghiệm và hành trình học tập.</p>
      </header>

      <div className="space-y-12">
        {posts.map((post: Post) => (
          <article key={post.id} className="group relative flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{post.created_at}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>5 phút đọc</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {post.summary || "Bấm vào để xem chi tiết bài viết này..."}
            </p>

            <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Đọc tiếp <ChevronRight size={16} />
            </Link>
            
            <div className="absolute -left-8 top-1.5 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 hidden md:block" />
          </article>
        ))}
      </div>
    </div>
  );
}