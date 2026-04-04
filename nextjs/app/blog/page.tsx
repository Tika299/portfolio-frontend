import { getPosts } from "@/lib/api";
import { Post } from "@/types";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="container mx-auto py-24 px-6 max-w-5xl">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Blog & Kiến thức</h1>
        <p className="text-muted-foreground text-lg italic border-l-4 pl-4 border-primary">
            Nơi chia sẻ hành trình lập trình và những kinh nghiệm thực chiến.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group flex flex-col space-y-4">
            {/* Ảnh bìa bài viết */}
            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden rounded-2xl border">
                <Image 
                    src={post.cover_image} 
                    alt={post.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
            </Link>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    <span>{post.published_at}</span>
                </div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.summary}
                </p>
                <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-1 text-sm font-bold text-primary pt-2 hover:gap-3 transition-all"
                >
                    Đọc chi tiết <ArrowRight size={16} />
                </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}