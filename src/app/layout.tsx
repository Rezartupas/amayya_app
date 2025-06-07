import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from '@/components/ui/tooltip';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amàyyà Tour - Paket Umrah Terbaik',
  description: 'Temukan paket Umrah terbaik dengan layanan profesional dari Amàyyà Tour. Kami siap melayani perjalanan ibadah Anda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={montserrat.variable}>
      <head>
        {/* Google Fonts are now handled by next/font */}
      </head>
      <body className="font-body antialiased font-light">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
