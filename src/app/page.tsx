// src/app/page.tsx
"use client"; // Required for useState hook for AI Assistant Dialog (now WhatsApp button)

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PackageSection } from '@/components/sections/PackageSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  // Placeholder phone number for WhatsApp, replace with actual number
  const whatsAppNumber = "6281234567890"; // Example: Indonesian number
  const genericWhatsAppMessage = "Assalamualaikum, saya ingin konsultasi gratis dan mendapatkan info pendaftaran untuk paket Umrah Amàyyà Tour.";

  const handleGenericWhatsAppClick = () => {
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(genericWhatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PackageSection whatsAppNumber={whatsAppNumber} />
        <TestimonialSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton onClick={handleGenericWhatsAppClick} />
    </div>
  );
}
