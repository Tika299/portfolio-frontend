import { Project, Post, ApiResponse } from "@/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
      cache: 'no-store',
    });
    if (!res.ok) return []; // Trả về mảng rỗng thay vì ném lỗi để Vercel build tiếp
    const data = await res.json();
    return data.data || [];
  } catch (e) {
    return []; // Trả về mảng rỗng nếu Render không phản hồi
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const res = await fetch(`${API_URL}/projects/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  const json: ApiResponse<Project> = await res.json();
  return json.data;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json: ApiResponse<Post[]> = await res.json();
  return json.data;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  const json: ApiResponse<Post> = await res.json();
  return json.data;
}