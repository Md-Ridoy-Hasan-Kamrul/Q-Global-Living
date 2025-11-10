'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import Link from 'next/link';

/**
 * PartnerCTA Component
 * Call-to-action section for becoming a partner
 */
export function PartnerCTA() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <section
      className='w-full p-5 sm:p-8 rounded-xl bg-[#fafafa] dark:bg-card-dark shadow-sm border border-gray-100 dark:border-border-dark text-center'
      aria-labelledby='partner-cta-heading'
    >
      <h2
        id='partner-cta-heading'
        className='text-xl sm:text-3xl font-bold text-gray-900 dark:text-white'
      >
        {t('rent.cta.partnerTitle')}
      </h2>
      <p className='mt-2 sm:mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
        {t('rent.cta.partnerSubtitle')}
      </p>
      <Link
        href='/contact'
        className='inline-flex mt-5 sm:mt-6 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-5 sm:px-6 bg-primary text-background-dark text-sm sm:text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        aria-label='Become a partner with Q Homes'
      >
        {t('rent.cta.partnerButton')}
      </Link>
    </section>
  );
}

/**
 * FinalCTA Component
 * Final call-to-action section with background image
 */
export function FinalCTA() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <section
      className='relative w-full rounded-xl overflow-hidden p-5 sm:p-10 text-center text-white min-h-[280px] sm:min-h-[300px] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 49, 0.9), rgba(10, 25, 49, 0.7)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby='final-cta-heading'
    >
      <div className='relative z-10 max-w-3xl mx-auto'>
        <h2 id='final-cta-heading' className='text-xl sm:text-3xl font-bold'>
          {t('rent.cta.finalTitle')}
        </h2>
        <p className='mt-2 sm:mt-3 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed'>
          {t('rent.cta.finalSubtitle')}
        </p>
        <div className='mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
          <Link
            href='/rent'
            className='inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-5 sm:px-6 bg-primary text-background-dark text-sm sm:text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          >
            {t('rent.cta.exploreButton')}
          </Link>
          <Link
            href='/services'
            className='inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-5 sm:px-6 bg-white/20 text-white text-sm sm:text-base font-bold leading-normal tracking-wide border border-white/50 hover:bg-white/30 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
          >
            {t('rent.cta.conciergeButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}
