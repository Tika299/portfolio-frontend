import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
        <div className="relative h-52 w-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            unoptimized={true}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-2">{project.title}</CardTitle>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech) => (
              <Badge key={tech.id} variant="secondary" className="text-xs">
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}