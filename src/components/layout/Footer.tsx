// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="https://placehold.co/40x40.png" 
                alt="Amàyyà Tour Logo" 
                data-ai-hint="logo compass"
                width={32} 
                height={32} 
                className="text-accent" 
              />
              <span className="font-headline font-bold text-2xl">Amàyyà Tour</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Perjalanan ibadah Umrah Anda adalah prioritas kami. Amàyyà Tour berkomitmen memberikan pelayanan terbaik untuk pengalaman spiritual yang tak terlupakan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent font-headline">Kontak Kami</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                <span>Jl. Kebenaran No. 1, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <a href="tel:+62211234567" className="hover:text-accent transition-colors">+62 21 1234 567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <a href="mailto:info@amayyatour.com" className="hover:text-accent transition-colors">info@amayyatour.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent font-headline">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Amàyyà Tour" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/amayyatour.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Amàyyà Tour" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Youtube Amàyyà Tour" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Amàyyà Tour. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
