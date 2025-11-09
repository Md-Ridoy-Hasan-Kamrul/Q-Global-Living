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
      className='w-full p-6 sm:p-10 rounded-xl bg-[#fafafa] dark:bg-card-dark shadow-sm border border-gray-100 dark:border-border-dark text-center'
      aria-labelledby='partner-cta-heading'
    >
      <h2
        id='partner-cta-heading'
        className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'
      >
        {t('rent.cta.partnerTitle')}
      </h2>
      <p className='mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
        {t('rent.cta.partnerSubtitle')}
      </p>
      <Link
        href='/contact'
        className='inline-flex mt-6 min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
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
      className='relative w-full rounded-xl overflow-hidden p-6 sm:p-10 text-center text-white min-h-[300px] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 49, 0.9), rgba(10, 25, 49, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7Ufcx2x_BF-AITtkpS-URPMLgN6OyHwkqzzPPaPxqEmqkoGqUAqj9IYBU_cZvbMj8K9lJ1SqBllkIfI2yoYo2UifRGNtsbZO12iW3z9VIItckSN38TG9732fjcitNq5Q0mrWNvCAEde560c9CZpV2VU3n1TCj1tbQl0Ua5UGxNQBJr9LMlpHoWstwjHfn0zJ57VouNYrYE4hD5IxMW5RVlsSOSrjJqpx8ZoA91sAjwThZbEm47S-8_jseyJJu1_5qdwf-7HbUbaE')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby='final-cta-heading'
    >
      <div className='relative z-10'>
        <h2 id='final-cta-heading' className='text-2xl sm:text-3xl font-bold'>
          {t('rent.cta.finalTitle')}
        </h2>
        <p className='mt-3 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base'>
          {t('rent.cta.finalSubtitle')}
        </p>
        <div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link
            href='/rent'
            className='w-full sm:w-auto inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          >
            {t('rent.cta.exploreButton')}
          </Link>
          <Link
            href='/services'
            className='w-full sm:w-auto inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/20 text-white text-base font-bold leading-normal tracking-wide border border-white/50 hover:bg-white/30 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
          >
            {t('rent.cta.conciergeButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}
