import Hero from "@/components/hero";
import { getProjects } from "@/lib/api";
import ProjectCard from "@/components/project-card"; // Đã sửa: Bỏ dấu ngoặc nhọn
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";

// Định nghĩa kiểu dữ liệu để tránh lỗi "any"
type Technology = {
  id: number;
  name: string;
};

type Project = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  technologies: Technology[];
};

export default async function Home() {
  const projects: Project[] = await getProjects(); // Lấy dữ liệu từ API thật
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <Hero />

        <section className="py-24 bg-slate-50/50 dark:bg-zinc-950/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Dự án tâm huyết</h2>
                <p className="text-muted-foreground mt-2 max-w-md">
                  Sản phẩm thực tế được xây dựng bằng hệ sinh thái Laravel & Next.js tối ưu hiệu năng.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full shadow-sm">
                <Link href="/projects">Khám phá tất cả dự án →</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestProjects.map((project: Project) => ( // Đã sửa: Thay any bằng Project
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center container mx-auto px-6">
          <div className="bg-primary text-primary-foreground rounded-3xl py-12 px-6 shadow-2xl shadow-primary/20">
            <h2 className="text-3xl font-bold mb-4">Bạn đang tìm một Fullstack Developer?</h2>
            <p className="mb-8 opacity-90">Tôi luôn sẵn sàng thảo luận về những dự án và cơ hội mới.</p>
            <Button asChild variant="secondary" size="lg" className="rounded-full font-bold">
              <Link href="/contact">Bắt đầu trò chuyện</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}