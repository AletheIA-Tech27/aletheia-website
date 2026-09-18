'use client';

import Link from 'next/link';

export default function WhatsAppFloat() {
  const whatsappUrl = 'https://wa.me/527202131181';

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-95 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.15 0H7.85C3.5 0 0 3.5 0 7.85v8.3c0 4.35 3.5 7.8 7.85 7.8h5.3l2.85 2.85.15-.15V16.15h2.85c4.35 0 7.8-3.45 7.8-7.8V7.85C24 3.5 20.5 0 16.15 0zm-.75 10.5H11.25V12.75h4.2v-2.25H11.25V6.75h4.2v2.25h2.25V6.75h2.7v8.25h-2.7v-4.5h-2.25v2.25z" />
      </svg>
    </Link>
  );
}
