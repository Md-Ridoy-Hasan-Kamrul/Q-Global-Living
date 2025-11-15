'use client';

import Link from 'next/link';
import { getTranslation } from '@/i18n';
import { ArrowRight } from 'lucide-react';

export default function DiasporaCta({ locale }) {
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
    <section className='lg:py-13 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='overflow-hidden rounded-2xl bg-charcoal dark:bg-primary shadow-2xl'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 lg:p-12'>
            {/* Content */}
            <div className='text-center md:text-left flex-1'>
              <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white'>
                {t('diaspora.title')}
              </h2>
              <p className='mt-2 sm:mt-3 text-sm sm:text-base text-white/90 max-w-xl'>
                {t('diaspora.subtitle')}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/diaspora`}
              className='group flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-primary dark:bg-white text-white dark:text-charcoal text-sm lg:text-base font-bold transition-all hover:scale-105 hover:shadow-xl active:scale-100 shrink-0 w-full md:w-auto'
            >
              <span>{t('diaspora.cta')}</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
