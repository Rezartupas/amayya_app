import Image from 'next/image';
import { Eye } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CertificateInfo } from '@/lib/types';

export function CertificatePreview({ certificate }: { certificate: CertificateInfo }) {
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