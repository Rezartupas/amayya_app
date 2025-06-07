// src/app/page.tsx
"use client"; // Required for useState hook for AI Assistant Dialog

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PackageSection } from '@/components/sections/PackageSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AiAssistantButton } from '@/components/AiAssistantButton';
import { AiAssistantDialog } from '@/components/AiAssistantDialog';

export default function Home() {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PackageSection />
        <TestimonialSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <AiAssistantButton onClick={() => setIsAiAssistantOpen(true)} />
      <AiAssistantDialog isOpen={isAiAssistantOpen} onOpenChange={setIsAiAssistantOpen} />
    </div>
  );
}
