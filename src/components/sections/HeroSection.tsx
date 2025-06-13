// src/components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
              <Image
          src="https://images.unsplash.com/photo-1633546707050-88e2b545831c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYWtrYWh8ZW58MHx8fHwxNzQ5MzExOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Masjidil Haram Mekkah"
                fill
          priority
                className="object-cover"
              />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>
      
      <div className="relative z-10 p-8 text-white max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 !text-white drop-shadow-lg">
          Wujudkan Perjalanan Umrah Impian Anda Bersama <span className="text-accent">amàyyà tour</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 !text-gray-200 drop-shadow-md">
          Nikmati pengalaman Ibadah yang tak terlupakan dengan fasilitas terbaik, bimbingan ibadah yang menenangkan bersama amàyyà tour.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
          <Link href="#paket">Pilih Paket Terbaik</Link>
        </Button>
      </div>
    </section>
  );
}
