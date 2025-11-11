'use client';

import Link from 'next/link';
import { getTranslation } from '@/i18n';
import { useAuth } from '@/contexts/AuthContext';

export default function HeroSection({ locale }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const {user} = useAuth();

  return (
    <section className='relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[70vh] lg:min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20 text-center text-white'>
      {/* Video Background */}
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          className='h-full w-full object-cover'
          loop
          muted
          playsInline
          poster='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"%3E%3Crect fill="%23333" width="1920" height="1080"/%3E%3C/svg%3E'
        >
          <source
            src='https://videos.pexels.com/video-files/4202353/4202353-hd_1920_1080_25fps.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60' />

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto w-full px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg'>
          {t('hero.title')}
        </h1>
        <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal text-white/95 max-w-3xl mx-auto drop-shadow-md'>
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
          <Link
            href={`/${locale}/buy`}
            className='w-full sm:w-auto flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-primary text-base sm:text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105 active:scale-100'
          >
            {t('hero.browseHomes')}
          </Link>
          <Link
            href={user ? `/${locale}/dashboard/admin` : `/${locale}/sell`}
            className='w-full sm:w-auto flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-white/95 backdrop-blur-sm text-base sm:text-lg font-bold text-charcoal transition-all hover:bg-white hover:shadow-xl hover:scale-105 active:scale-100'
          >
            {
              user? <span>Go to Dashboard</span>:<>{t('hero.listProperty')}</>
            }
          </Link>
        </div>
      </div>
    </section>
  );
}
