import { getProjectBySlug, getProjects } from "@/lib/api";
import { notFound } from "next/navigation";
import ProjectClientContent from "@/components/project-client-content";
import { Project } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Chạy ở Server lúc Build để tạo trang tĩnh (SEO cực tốt)
export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects.map((project: Project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Lỗi lấy danh sách slug:", error);
    return [];
  }
}

// 2. Server Component chính
export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  
  // Lấy dữ liệu trực tiếp từ Server (Không cần useEffect, useState nữa)
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  // Truyền dữ liệu sang Client Component để hiển thị giao diện và chạy hiệu ứng
  return <ProjectClientContent project={project} />;
}

export const dynamicParams = true;