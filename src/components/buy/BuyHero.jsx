'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import Image from 'next/image';

/**
 * BuyHero Component
 * Hero section for buy page with background image and text overlay
 * Optimized for performance with Next.js Image
 */
export default function BuyHero() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <section
      className='relative w-full min-h-[480px] flex flex-col items-center justify-center rounded-xl overflow-hidden'
      aria-label='Buy properties hero section'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop'
          alt='Luxury property exterior with modern architecture'
          fill
          sizes='100vw'
          className='object-cover'
          priority
          quality={85}
        />
        {/* Gradient Overlay */}
        <div
          className='absolute inset-0 bg-linear-to-b from-gray-900/40 via-gray-900/60 to-gray-900/70'
          aria-hidden='true'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-4 px-4 text-center max-w-4xl mx-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight'>
          {t('buy.hero.title', "Find Your Dream Home in Côte d'Ivoire")}
        </h1>
        <p className='text-gray-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto'>
          {t('buy.hero.subtitle', 'Discover verified, high-quality properties for sale across Abidjan and beyond.')}
        </p>
      </div>
    </section>
  );
}
