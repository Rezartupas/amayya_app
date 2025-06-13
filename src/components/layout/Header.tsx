// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Paket Umrah', href: '#paket' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 max-w-screen-2xl">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
          <Image 
            src="./images/amayya.svg" 
            alt="Amàyyà Tour Logo" 
            data-ai-hint="logo compass"
            width={28} 
            height={28} 
            className="text-accent" 
          />
          <span className="font-headline font-bold text-xl">amàyyà tour</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                  <Link href="/" className="flex items-center space-x-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image 
                      src="./images/amayya.svg" 
                      alt="Amàyyà Tour Logo" 
                      data-ai-hint="logo compass"
                      width={28} 
                      height={28} 
                      className="text-accent" 
                    />
                    <span className="font-headline font-bold text-xl">amàyyà tour</span>
                  </Link>
                </SheetTitle>
                {/* You can add a SheetDescription here if needed */}
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                   <SheetClose asChild key={item.label}>
                      <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                      >
                      {item.label}
                      </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
