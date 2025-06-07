// src/components/sections/PackageSection.tsx
"use client";

import Image from 'next/image';
import { umrahPackages } from '@/lib/placeholder-data';
import type { UmrahPackage } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, DollarSign, CheckCircle2 } from 'lucide-react'; // Removed PackageIcon as it's not used

interface PackageCardProps {
  pkg: UmrahPackage;
  onBookViaWhatsApp: (packageName: string) => void;
}

function PackageCard({ pkg, onBookViaWhatsApp }: PackageCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image src={pkg.image} alt={pkg.name} data-ai-hint={pkg.dataAiHint} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold mb-2 font-headline text-primary">{pkg.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4">{pkg.description}</CardDescription>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm">
            <CalendarDays className="h-4 w-4 mr-2 text-accent" />
            <span className="font-medium">Durasi:</span>&nbsp;{pkg.duration}
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-accent" />
            <span className="font-medium">Harga Mulai:</span>&nbsp;{pkg.price}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-1 text-sm text-foreground">Termasuk:</h4>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {pkg.inclusions.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-3.5 w-3.5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30">
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          onClick={() => onBookViaWhatsApp(pkg.name)}
        >
          Tanya/Daftar via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}

interface PackageSectionProps {
  whatsAppNumber: string;
}

export function PackageSection({ whatsAppNumber }: PackageSectionProps) {
  const handleBookPackageViaWhatsApp = (packageName: string) => {
    const message = `Assalamualaikum, saya tertarik dengan paket "${packageName}". Mohon info lebih lanjut dan cara pendaftarannya.`;
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="paket" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Paket Umrah Pilihan</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket Umrah yang sesuai dengan kebutuhan dan preferensi Anda. Kami menawarkan berbagai pilihan dengan fasilitas terbaik.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBookViaWhatsApp={handleBookPackageViaWhatsApp} />
          ))}
        </div>
      </div>
    </section>
  );
}
