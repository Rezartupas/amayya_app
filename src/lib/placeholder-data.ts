import type { UmrahPackage, Testimonial, FaqItem } from './types';

export const umrahPackages: UmrahPackage[] = [
  {
    id: '1',
    name: 'Paket Qanaah Series',
    duration: '9 Hari',
    price: 'Rp 27.500.000',
    image: './images/paket/qanaah.svg',
    dataAiHint: 'kaaba prayer',
    inclusions: 
    [
      'Tiket Pesawat PP',
      'Visa, Tasreh, dan Asuransi Perjalanan',
      'Transportasi + Snack di Setiap Perjalanan',
      'Hotel Bintang 3',
      'Fullboard Meals (Makan 3x Sehari)',
      'Ziarah di Kota Mekkah & Kota Madinah',
      'Pembimbing Ibadah (Muthawwif/ah)',
      'Air Zamzam (1 galon)',
      'Manasik/Bimbingan Umroh',
      'Perlengkapan Umrah',
      'Kereta Cepat Al Haromain (MED-MAK)'
    ],
    description: 'Nikmati perjalanan Umrah yang nyaman dan khusyuk dengan fasilitas hotel bintang 3 dan bimbingan intensif.',
  },
  {
    id: '2',
    name: 'Paket Berkah Series',
    duration: '9 Hari dan 12 Hari',
    price: 'Rp 32.500.000',
    image: './images/paket/berkah.svg',
    dataAiHint: 'mosque interior',
    inclusions: 
    [
      'Tiket Pesawat PP',
      'Visa, Tasreh, dan Asuransi Perjalanan',
      'Transportasi + Snack di Setiap Perjalanan',
      'Hotel Bintang 4',
      'Fullboard Meals (Makan 3x Sehari)',
      'Ziarah di Kota Mekkah & Kota Madinah',
      'Pembimbing Ibadah (Muthawwif/ah)',
      'Air Zamzam (1 galon)',
      'Manasik/Bimbingan Umroh',
      'Perlengkapan Umrah',
      'Kereta Cepat Al Haromain (MED-MAK)',
      'City Tour Kota Thaif'
    ],
    description: 'Pengalaman Umrah mewah dengan akomodasi terbaik, layanan prima, dan program ibadah yang mendalam.', //edit this line to change the description
  },
  {
    id: '3',
    name: 'Paket Hasanah Series',
    duration: '9 Hari dan 12 Hari', 
    price: 'Rp 37.500.000',
    image: './images/paket/hasanah.svg',
    dataAiHint: 'family praying',
    inclusions: 
    [
      'Tiket Pesawat PP',
      'Visa, Tasreh, dan Asuransi Perjalanan',
      'Transportasi + Snack di Setiap Perjalanan',
      'Hotel Bintang 5',
      'Fullboard Meals (Makan 3x Sehari)',
      'Ziarah di Kota Mekkah & Kota Madinah',
      'Pembimbing Ibadah (Muthawwif/ah)',
      'Air Zamzam (1 galon)',
      'Manasik/Bimbingan Umroh',
      'Perlengkapan Umrah',
      'Kereta Cepat Al Haromain (MED-MAK)',
      'City Tour Kota Thaif'
    ],
    description: 'Pengalaman Umrah mewah dengan akomodasi terbaik, layanan prima, dan program ibadah yang mendalam.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Refal Hady',
    location: 'Jakarta',
    quote: 'Terima kasih banyak kehangatannya, kekeluargaannya, Bimbingannya. benar benar terasa seperti bukan perjalanan yang bekerja sama gitu tapi emang bener bener seperti keluarga.',
    image: '/images/testimoni/refal-hady.jpg',
    dataAiHint: 'man smiling',
  },
  {
    id: '2',
    name: 'Ibrahim Risyad',
    location: 'Jakarta',
    quote: 'Sangat berkesan, seru banget pokoknya buat teman teman semua kalau misalkan ada yang mau umroh atau ingin pergi ke daerah saudi arabia bisa langsung saja kontak Amayya.',
    image: '/images/testimoni/ibrahim_risyad.jpg',
    dataAiHint: 'man smiling',
  },
  {
    id: '3',
    name: 'Pak Joko',
    location: 'Jakarta',
    quote: 'Kami sekeluarga merasa sangat puas dengan layanan Amàyyà Tour. Anak-anak juga senang karena ada program khusus untuk mereka. Sangat direkomendasikan!',
    image: '/images/testimoni/pak-joko.jpg',
    dataAiHint: 'oldman smiling',
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
