'use client';

import Link from 'next/link';
import { getTranslation } from '@/i18n';
import { Home, MessageCircle } from 'lucide-react';

export default function FinalCta({ locale }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <section className='border-t border-primary/20 py-8 pb-10 lg:pb-12  px-4 sm:px-6'>
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-charcoal dark:text-white'>
          {t('finalCta.title')}
        </h2>
        <p className='mx-auto mt-4 lg:mt-6 max-w-2xl text-sm sm:text-base text-charcoal/80 dark:text-soft-grey/80'>
          {t('finalCta.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
          <Link
            href={`/${locale}/buy`}
            className='group flex items-center justify-center gap-2 w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-primary text-white text-sm lg:text-base font-bold transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105 active:scale-100'
          >
            <Home className='w-5 h-5' />
            <span>{t('finalCta.browseHomes')}</span>
          </Link>
          <Link
            href={`/${locale}/services`}
            className='group flex items-center justify-center gap-2 w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg border-2 border-primary bg-transparent text-primary text-sm lg:text-base font-bold transition-all hover:bg-primary/10 hover:shadow-lg hover:scale-105 active:scale-100'
          >
            <MessageCircle className='w-5 h-5' />
            <span>{t('finalCta.talkToConcierge')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
