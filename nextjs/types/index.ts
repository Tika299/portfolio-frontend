// types/index.ts
export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  technologies: { id: number; name: string }[];
  content?: string; // Dấu ? nghĩa là có thể có hoặc không
}