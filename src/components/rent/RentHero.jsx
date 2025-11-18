'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import Image from 'next/image';

/**
 * RentHero Component
 * Hero section for rent page with background image and text overlay
 * Optimized for performance with Next.js Image
 */
export default function RentHero() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <section
      className='relative w-full sm:min-h-[480px] flex flex-col items-center justify-center rounded-xl overflow-hidden p-6'
      aria-label='Rent properties hero section'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/buy-rent/thumbnail.jpg'
          alt='Modern living room with city skyline view'
          fill
          sizes='100vw'
          className='object-cover'
          priority
          quality={85}
        />
        {/* Gradient Overlay */}
        <div
          className='absolute inset-0 bg-linear-to-b from-gray-900/35 to-gray-900/35'
          aria-hidden='true'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-4 text-center max-w-3xl mx-auto'>
        <h1 className='text-white text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em] lg:text-5xl'>
          {t('rent.hero.title')}
        </h1>
        <p className='text-gray-200 text-sm sm:text-base font-normal leading-normal lg:text-lg'>
          {t('rent.hero.subtitle')}
        </p>
      </div>
    </section>
  );
}
