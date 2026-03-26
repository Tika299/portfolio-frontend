"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Sẵn sàng cho những thử thách mới
        </span>
      </motion.div>

      <motion.h1 
        className="text-6xl md:text-8xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, Im <span className="text-primary">Vu</span> <br />
        Fullstack Developer
      </motion.h1>

      <motion.p 
        className="max-w-[600px] text-muted-foreground text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Chuyên xây dựng các ứng dụng web hiệu năng cao với Next.js và hệ sinh thái Laravel mạnh mẽ.
      </motion.p>

      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild size="lg" className="rounded-full">
          <Link href="/projects">Xem dự án của tôi</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="/contact">Liên hệ ngay</Link>
        </Button>
      </motion.div>
    </section>
  );
}