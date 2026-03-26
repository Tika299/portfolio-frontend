"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          VUXUAN<span className="text-primary">.DEV</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/projects" className="hover:text-primary transition-colors">Dự án</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Giới thiệu</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Button asChild variant="default" size="sm" className="rounded-full px-5">
            <Link href="/contact">Liên hệ</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}