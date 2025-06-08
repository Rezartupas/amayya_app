// src/components/sections/ContactSection.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  phone: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.",
    });
    form.reset();
  }

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container max-w-screen-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Hubungi Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ada pertanyaan atau ingin mendaftar paket Umrah? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 font-headline text-primary">Kirim Pesan</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@anda.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Telepon (Opsional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="08xxxxxxxxxx" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan Anda</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tuliskan pertanyaan atau pesan Anda di sini..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Mengirim..." : "Kirim Pertanyaan"}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 font-headline text-primary">Informasi Kontak Langsung</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Alamat Kantor:</span><br />
                    Jl. Lodaya No.11 A, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40232
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Telepon:</span> <a href="https://wa.me/6281319463463" className="hover:text-accent transition-colors">+62 813 1946 3463</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Email:</span> <a href="mailto:amayyatour@gmail.com" className="hover:text-accent transition-colors">amayyatour@gmail.com</a>
                  </div>
                </li>
              </ul>
            </Card>
             <Card className="p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 font-headline text-primary">Jam Operasional</h3>
                <p className="text-muted-foreground">
                    Senin - Jumat: 09:00 - 17:00 WIB<br />
                    Sabtu: 09:00 - 13:00 WIB<br />
                    Minggu & Hari Libur Nasional: Tutup
                </p>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Need to add Card component if not already added globally
// Assuming Card component is available from shadcn/ui
import { Card } from '@/components/ui/card';
