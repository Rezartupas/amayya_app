export interface UmrahPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  dataAiHint: string;
  inclusions: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
  dataAiHint: string;
  location?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
