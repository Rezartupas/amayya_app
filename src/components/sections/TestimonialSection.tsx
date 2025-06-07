// src/components/sections/TestimonialSection.tsx
import Image from 'next/image';
import { testimonials } from '@/lib/placeholder-data';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="flex-grow flex flex-col items-center text-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-accent">
          <Image src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} fill className="object-cover" />
        </div>
        <h3 className="text-lg font-semibold font-headline text-primary">{testimonial.name}</h3>
        {testimonial.location && <p className="text-xs text-muted-foreground mb-1">{testimonial.location}</p>}
        <div className="flex my-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
          ))}
        </div>
        <blockquote className="mt-2 text-sm text-foreground/80 italic leading-relaxed flex-grow">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

export function TestimonialSection() {
  return (
    <section id="testimoni" className="py-16 lg:py-24">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Apa Kata Jamaah Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman dan kepuasan jamaah adalah bukti komitmen pelayanan terbaik dari Amàyyà Tour.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
