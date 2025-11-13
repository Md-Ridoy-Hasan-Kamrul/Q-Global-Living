'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useAuth } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';

export default function ClientDashboardLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'client')) {
      router.push(`/${locale}/login`);
    }
  }, [user, loading, router, locale]);

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <div className='mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E6B325] border-t-transparent' />
          <p className='mt-4 text-gray-600'>{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== 'client') {
    return null;
  }

  return (
    <LanguageProvider initialLocale={locale}>
      <div className='flex h-screen bg-gray-50 overflow-hidden'>
        <Sidebar role='client' />
        <div className='flex flex-1 flex-col lg:pl-64 overflow-hidden'>
          <DashboardHeader title={t('dashboard.client.title')} />
          <main className='flex-1 overflow-y-auto p-4 sm:p-6'>{children}</main>
        </div>
      </div>
    </LanguageProvider>
  );
}
