"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Layout, Rocket, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="container mx-auto py-20 px-6 max-w-5xl">
            {/* PHẦN 1: GIỚI THIỆU TỔNG QUAN */}
            <motion.section {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative aspect-square max-w-sm mx-auto md:mx-0 overflow-hidden rounded-2xl border-4 border-muted shadow-2xl">
                    <Image
                        src="https://raw.githubusercontent.com/Tika299/portfolio-assets/refs/heads/main/avatar.png" // Hãy thay bằng ảnh chân dung của bạn
                        alt="Xuân Vũ"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
                        Tôi là <span className="text-primary">Xuân Vũ</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Một Full-stack Developer đam mê việc xây dựng các ứng dụng web tối ưu và dễ mở rộng.
                        Tôi tập trung vào việc tạo ra những trải nghiệm người dùng tuyệt vời với **Next.js**
                        và xây dựng hệ thống quản trị mạnh mẽ bằng **Laravel**.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">2+</span>
                            <span className="text-sm text-muted-foreground">Năm kinh nghiệm</span>
                        </div>
                        <div className="w-px h-10 bg-border mx-2" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">10+</span>
                            <span className="text-sm text-muted-foreground">Dự án hoàn thành</span>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* PHẦN 2: KỸ NĂNG CHUYÊN MÔN */}
            <motion.section
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mb-24"
            >
                <h2 className="text-3xl font-bold mb-10 text-center">Hệ sinh thái kỹ năng</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Frontend */}
                    <Card className="bg-secondary/20 border-none shadow-none">
                        <CardContent className="pt-6 text-center space-y-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-primary">
                                <Layout size={28} />
                            </div>
                            <h3 className="font-bold text-xl">Frontend</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"].map(s => (
                                    <Badge key={s} variant="outline">{s}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Backend */}
                    <Card className="bg-secondary/20 border-none shadow-none">
                        <CardContent className="pt-6 text-center space-y-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-primary">
                                <Server size={28} />
                            </div>
                            <h3 className="font-bold text-xl">Backend</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {["Laravel", "PHP", "MySQL", "PostgreSQL", "RESTful API"].map(s => (
                                    <Badge key={s} variant="outline">{s}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tools & DevOps */}
                    <Card className="bg-secondary/20 border-none shadow-none">
                        <CardContent className="pt-6 text-center space-y-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-primary">
                                <Rocket size={28} />
                            </div>
                            <h3 className="font-bold text-xl">Tools</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {["Docker", "Git", "GitHub", "Vercel", "Postman"].map(s => (
                                    <Badge key={s} variant="outline">{s}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </motion.section>

            {/* PHẦN 3: LỘ TRÌNH (TIMELINE) */}
            <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
                <h2 className="text-3xl font-bold mb-10">Lộ trình phát triển</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 dark:before:via-primary/50 before:to-transparent">

                    {/* Item 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow-sm shrink-0 md:order-1 border-primary/20 dark:border-primary/50 me-7">
                            <Briefcase size={18} className="text-primary animate-pulse" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl border bg-card shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                                <time className="font-bold text-primary">2024 - Hiện tại</time>
                            </div>
                            <div className="text-lg font-bold">Full-stack Developer (Freelance)</div>
                            <div className="text-muted-foreground">Phát triển các ứng dụng thương mại điện tử và quản lý kho bằng Laravel & Next.js.</div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow shrink-0 md:order-1 border-primary/20 dark:border-primary/50 ms-7">
                            <GraduationCap size={18} className="text-primary animate-pulse" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl border bg-card shadow-sm">
                            <time className="font-bold text-primary text-sm">2023 - 2025</time>
                            <div className="text-lg font-bold">Cao Đẳng Công Nghệ Thủ Đức</div>
                            <div className="text-muted-foreground">Chuyên ngành Công nghệ thông tin. GPA: 3.x/4.0</div>
                        </div>
                    </div>

                </div>
            </motion.section>
        </div>
    );
}