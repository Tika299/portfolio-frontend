// app/projects/page.tsx
import { getProjects } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Project } from "@/types"; // Import kiểu dữ liệu Project từ types/index.ts

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Sản phẩm của tôi</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.id}
            className="block"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
              {/* Thumbnail */}
              <div className="relative h-52 w-full">
                <Image 
                  src={project.thumbnail} 
                  alt={project.title} 
                  fill 
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Nội dung */}
              <CardHeader className="pb-4">
                <CardTitle className="line-clamp-2 text-xl">
                  {project.title}
                </CardTitle>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech.id} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}