'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PageLayout({ children, locale }) {
  const pathname = usePathname();
  const isDashboard = pathname?.includes('/dashboard/');

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header locale={locale} />
      <main className='grow bg-accent'>{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton />
    </div>
  );
}
