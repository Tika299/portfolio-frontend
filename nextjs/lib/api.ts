const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`, { next: { revalidate: 3600 } }); // Cache 1 tiếng
  if (!res.ok) throw new Error('Failed to fetch projects');
  const data = await res.json();
  return data.data; // Vì Laravel Resource bọc dữ liệu trong key 'data'
}

export async function getProjectBySlug(slug: string) {
  const res = await fetch(`${API_URL}/projects/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.data;
}