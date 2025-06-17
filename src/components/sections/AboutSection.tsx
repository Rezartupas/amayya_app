import Image from 'next/image';
import { Award, ShieldCheck, Users, Eye } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CertificateInfo } from '@/lib/types';
import { certificates } from '@/lib/placeholder-data'; 

function CertificatePreview({ certificate }: { certificate: CertificateInfo }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full text-left justify-start text-xs h-auto py-1.5 px-3 border-none text-primary hover:bg-accent/10 hover:text-accent">
          <Eye className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
          Lihat {certificate.label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>{certificate.label} - Amàyyà Tour</DialogTitle>
          <DialogDescription>
            Dokumen resmi: {certificate.label}.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 max-h-[75vh] overflow-y-auto">
          <div className="relative w-full min-h-[50vh]"> 
            <Image
              src={certificate.imageSrc}
              alt={certificate.imageAlt}
              fill
              className="object-contain" 
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
              <div className="flex flex-col items-start p-4 bg-background rounded-lg shadow">
                <div className="flex items-start w-full mb-3">
                  <ShieldCheck className="h-10 w-10 text-accent mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary font-headline">Terpercaya & Berizin</h3>
                    <p className="text-sm text-muted-foreground">Agen perjalanan resmi dengan legalitas lengkap.</p>
                  </div>
                </div>
                <div className="w-full space-y-2 mt-1">
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
              <div className="flex items-start p-4 bg-background rounded-lg shadow">
                <div>
                  {certificates.map((cert) => (
                    <CertificatePreview key={cert.id} certificate={cert} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.svg" 
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
