// src/components/sections/FaqSection.tsx
import { faqItems } from '@/lib/placeholder-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container max-w-screen-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Pertanyaan Umum (FAQ)</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan Umrah kami.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-border last:border-b-0">
              <AccordionTrigger className="text-left hover:no-underline py-4 text-md font-semibold text-primary hover:text-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-0 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
