import { useEffect, useState } from "react";
import { getProjectBySlug, getProjects } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Calendar, Tag } from "lucide-react"; // Đảm bảo là Github
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import GithubIcon from "@/components/icons/GithubIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ProjectClientContent from "@/components/project-client-content";

import { Project } from "@/types";

// 2. Định nghĩa kiểu cho Props của Page
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: PageProps) {
  // Thay <any> bằng <Project | null>
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resolvedParams = await params;
        const data = await getProjectBySlug(resolvedParams.slug);

        if (!data) {
          notFound();
          return;
        }

        setProject(data);
      } catch (error) {
        console.error("Lỗi khi tải dự án:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center animate-pulse text-muted-foreground">
      Đang tải dự án...
    </div>
  );

  if (!project) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-12 px-6 max-w-5xl"
    >
      <Button variant="ghost" asChild className="mb-8 -ml-4 hover:bg-transparent group">
        <Link href="/projects" className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách
        </Link>
      </Button>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
            <Calendar size={14} /> <span>{project.created_at}</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
            <Tag size={14} /> <span>Fullstack Development</span>
          </div>
        </div>
      </header>

      <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl mb-12 group">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          unoptimized={true}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Chi tiết dự án
          </h2>

          {/* KHU VỰC RENDER MARKDOWN */}
          <div className="markdown-body !bg-transparent !text-inherit !w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4">Công nghệ</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <Badge
                  key={tech.id}
                  variant="secondary"
                  className="px-3 py-3 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={18}
                      height={18}
                    />
                  )}
                  <span className="ml-2">{tech.name}</span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.demo_url && (
              <Button asChild className="w-full justify-center gap-3 rounded-xl h-12 shadow-lg shadow-primary/20" size="lg">
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                  <Globe size={18} /> Xem Demo trực tiếp
                </a>
              </Button>
            )}
            {project.github_url && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-center gap-3 rounded-xl h-12"
                size="lg"
              >
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}