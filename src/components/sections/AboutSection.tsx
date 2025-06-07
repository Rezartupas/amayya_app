// src/components/sections/AboutSection.tsx
import Image from 'next/image';
import { Award, ShieldCheck, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">Tentang Amàyyà Tour</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Amàyyà Tour adalah biro perjalanan Umrah dan Haji Khusus yang berizin resmi dan berpengalaman. Kami berdedikasi untuk memberikan pelayanan terbaik, transparan, dan amanah demi kenyamanan ibadah Anda di Tanah Suci.
            </p>
            <p className="text-muted-foreground mb-6">
              Misi kami adalah menjadi mitra perjalanan ibadah terpercaya bagi umat Muslim di Indonesia, dengan mengedepankan kualitas layanan, bimbingan ibadah yang komprehensif, dan fasilitas yang memadai.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-background rounded-lg shadow">
                <ShieldCheck className="h-10 w-10 text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary font-headline">Terpercaya & Berizin</h3>
                  <p className="text-sm text-muted-foreground">Agen perjalanan resmi dengan legalitas lengkap.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-background rounded-lg shadow">
                <Users className="h-10 w-10 text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary font-headline">Tim Profesional</h3>
                  <p className="text-sm text-muted-foreground">Didukung oleh tim yang berpengalaman dan amanah.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-background rounded-lg shadow">
                <Award className="h-10 w-10 text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary font-headline">Layanan Prima</h3>
                  <p className="text-sm text-muted-foreground">Mengutamakan kepuasan dan kenyamanan jamaah.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Tim Amàyyà Tour"
              data-ai-hint="team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
