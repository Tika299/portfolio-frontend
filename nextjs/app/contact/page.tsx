"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Định nghĩa khung kiểm tra lỗi (Validation Schema)
const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không đúng định dạng"),
  subject: z.string().min(5, "Tiêu đề quá ngắn"),
  message: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Tuyệt vời! Vũ đã nhận được tin nhắn của bạn.");
        reset(); // Xóa sạch form sau khi gửi
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    } catch (error) {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }

  return (
    <div className="container mx-auto py-20 px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
           <h1 className="text-4xl font-bold mb-6">Hãy cùng tạo nên <br/><span className="text-primary">điều gì đó tuyệt vời!</span></h1>
           <p className="text-muted-foreground mb-10 text-lg text-pretty">
             Tôi luôn sẵn sàng cho các cơ hội hợp tác mới. Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại gửi tin nhắn cho tôi.
           </p>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail size={20} /></div>
              <div><p className="text-sm text-muted-foreground">Email cho tôi tại</p><p className="font-medium">lexuanvu2608@gmail.com</p></div>
           </div>
        </div>

        <div className="bg-card border rounded-3xl p-8 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Họ và tên</label>
                <Input {...register("name")} placeholder="Nguyễn Văn A" className="rounded-xl" />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input {...register("email")} type="email" placeholder="a@example.com" className="rounded-xl" />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tiêu đề</label>
              <Input {...register("subject")} placeholder="Cơ hội hợp tác..." className="rounded-xl" />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nội dung</label>
              <Textarea {...register("message")} placeholder="Tôi muốn trao đổi với bạn về..." rows={5} className="rounded-xl" />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full rounded-xl py-6 font-bold gap-2 shadow-lg" disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"} <Send size={18} />
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}