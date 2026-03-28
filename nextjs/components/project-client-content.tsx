"use client"; // File này giữ nhiệm vụ chạy Animation

import { motion } from "framer-motion";
import { ArrowLeft, Globe, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Project } from "@/types";

export default function ProjectClientContent({ project }: { project: Project }) {
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {project.title}
        </h1>
        {/* ... (Các phần Header khác của bạn) */}
      </header>

      <div className="relative aspect-video w-full overflow-hidden rounded-3xl border shadow-2xl mb-12">
        <Image 
          src={project.thumbnail} 
          alt={project.title} 
          fill 
          className="object-cover"
          priority
          unoptimized={true} // Giữ lại để tránh lỗi 400 ở bước trước
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
             <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.content}
             </ReactMarkdown>
          </div>
        </div>

        <div className="space-y-8">
           {/* ... (Phần Sidebar chứa Tech stack và Link) */}
        </div>
      </div>
    </motion.div>
  );
}