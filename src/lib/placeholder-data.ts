import type { UmrahPackage, Testimonial, FaqItem } from './types';

export const umrahPackages: UmrahPackage[] = [
  {
    id: '1',
    name: 'Paket Umrah Shafa',
    duration: '9 Hari',
    price: 'Rp 28.500.000',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'kaaba prayer',
    inclusions: ['Tiket Pesawat PP (Kelas Ekonomi)', 'Hotel Bintang 4 (Mekkah & Madinah)', 'Visa Umrah & Asuransi Perjalanan', 'Makan 3x Sehari (Menu Indonesia)', 'Transportasi Bus AC', 'Muthawwif Berpengalaman', 'Air Zamzam 5 Liter'],
    description: 'Nikmati perjalanan Umrah yang nyaman dan khusyuk dengan fasilitas hotel bintang 4 dan bimbingan intensif.',
  },
  {
    id: '2',
    name: 'Paket Umrah Marwah',
    duration: '12 Hari',
    price: 'Rp 35.000.000',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mosque interior',
    inclusions: ['Tiket Pesawat PP (Kelas Ekonomi)', 'Hotel Bintang 5 (Dekat Masjidil Haram & Nabawi)', 'Visa Umrah & Asuransi Perjalanan Premium', 'Makan 3x Sehari (Buffet Internasional & Indonesia)', 'Transportasi Bus AC Eksekutif', 'Muthawwif Senior & Pembimbing Ibadah', 'City Tour Mekkah & Madinah', 'Air Zamzam 10 Liter'],
    description: 'Pengalaman Umrah mewah dengan akomodasi terbaik, layanan prima, dan program ibadah yang mendalam.',
  },
  {
    id: '3',
    name: 'Paket Umrah Keluarga Barakah',
    duration: '10 Hari',
    price: 'Rp 26.000.000 /orang (Min. 4 orang)',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'family praying',
    inclusions: ['Tiket Pesawat PP', 'Hotel Bintang 3/4 (Ramah Keluarga)', 'Visa Umrah & Asuransi', 'Makan 3x Sehari', 'Transportasi Privat (Opsional)', 'Muthawwif Khusus Keluarga', 'Program Anak (Opsional)'],
    description: 'Rencanakan ibadah Umrah bersama keluarga tercinta dengan paket yang dirancang khusus untuk kenyamanan semua anggota keluarga.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bapak Ahmad Subarjo',
    location: 'Jakarta',
    quote: 'Pelayanan Amàyyà Tour luar biasa, mulai dari persiapan di tanah air hingga pelaksanaan ibadah di tanah suci. Muthawwif sangat membantu dan sabar. Terima kasih Amàyyà Tour!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man smiling',
  },
  {
    id: '2',
    name: 'Ibu Siti Aminah',
    location: 'Surabaya',
    quote: 'Hotelnya dekat dengan Masjidil Haram, jadi sangat memudahkan untuk shalat berjamaah. Makanan juga enak dan bervariasi. Insya Allah akan berangkat lagi bersama Amàyyà Tour.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman hijab',
  },
  {
    id: '3',
    name: 'Keluarga H. Abdullah',
    location: 'Bandung',
    quote: 'Kami sekeluarga merasa sangat puas dengan layanan Amàyyà Tour. Anak-anak juga senang karena ada program khusus untuk mereka. Sangat direkomendasikan!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'family portrait',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Apa saja dokumen yang diperlukan untuk mendaftar Umrah?',
    answer: 'Dokumen yang umumnya diperlukan adalah paspor yang masih berlaku minimal 7 bulan, Kartu Tanda Penduduk (KTP), Kartu Keluarga (KK), buku nikah (bagi suami istri), akta lahir (bagi anak-anak), dan pas foto terbaru dengan latar belakang putih.',
  },
  {
    id: '2',
    question: 'Kapan waktu terbaik untuk melaksanakan Umrah?',
    answer: 'Umrah dapat dilaksanakan kapan saja sepanjang tahun, kecuali pada waktu pelaksanaan ibadah Haji. Banyak jamaah memilih waktu di luar musim liburan untuk menghindari keramaian.',
  },
  {
    id: '3',
    question: 'Apakah Amàyyà Tour menyediakan paket Umrah plus wisata?',
    answer: 'Ya, kami menyediakan beberapa pilihan paket Umrah plus wisata ke destinasi menarik seperti Turki, Dubai, atau Mesir. Silakan hubungi kami untuk informasi lebih lanjut.',
  },
  {
    id: '4',
    question: 'Bagaimana cara pembayaran paket Umrah?',
    answer: 'Kami menerima pembayaran melalui transfer bank. Pembayaran dapat dilakukan secara bertahap sesuai dengan ketentuan yang berlaku. Informasi detail akan kami sampaikan saat pendaftaran.',
  },
];
