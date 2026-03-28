import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar";
// app/layout.tsx
import "github-markdown-css/github-markdown.css"; // Thêm dòng này
import "highlight.js/styles/github-dark.css"; // Hoặc github.css nếu bạn thích nền sáng
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Xuân Vũ",
  description: "Full-stack Developer - Laravel & Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar đặt ở đây */}
          <Navbar />
          
          {/* Thêm pt-16 để nội dung không bị Navbar đè lên */}
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}