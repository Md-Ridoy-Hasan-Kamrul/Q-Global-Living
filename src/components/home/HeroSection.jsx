'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getTranslation } from '@/i18n';
import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect, useRef } from 'react';

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

  const { user } = useAuth();
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Force video to play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        video.load(); // Force reload the video
        await video.play();
        console.log('✅ Video playing');
        setIsVideoVisible(true);
      } catch (err) {
        console.warn('⚠️ Autoplay blocked, waiting for user interaction:', err.message);
        // Fallback: play on any user interaction
        const handleInteraction = async () => {
          try {
            await video.play();
            setIsVideoVisible(true);
            console.log('✅ Video playing after interaction');
          } catch (e) {
            console.error('❌ Video play failed:', e);
          }
          // Clean up listeners
          ['click', 'touchstart', 'scroll'].forEach(event => {
            document.removeEventListener(event, handleInteraction);
          });
        };
        
        ['click', 'touchstart', 'scroll'].forEach(event => {
          document.addEventListener(event, handleInteraction, { once: true });
        });
      }
    };

    // Small delay to ensure video element is fully ready
    const timer = setTimeout(attemptPlay, 100);
    
    return () => {
      clearTimeout(timer);
      video.pause();
    };
  }, []);

  return (
    <section className='relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[70vh] lg:min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20 text-center text-white'>
      {/* Fallback Background Image */}
      <Image
        src='/heroMain.jpg'
        alt='Luxury property background'
        fill
        priority={true}
        quality={85}
        className={`object-cover transition-opacity duration-1000 ${
          isVideoVisible ? 'opacity-0' : 'opacity-100'
        }`}
        sizes='100vw'
      />

      {/* Background Video - Always rendered */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload='auto'
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 z-1 ${
          isVideoVisible ? 'opacity-100' : 'opacity-0'
        }`}
        poster='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80'
      >
        <source src='/heroVideo.mp4' type='video/mp4' />
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/60 to-black/60 z-2' />

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto w-full px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/80 font-extrabold leading-tight tracking-tight drop-shadow-lg'>
          {t('hero.title')}
        </h1>
        <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal text-white/80 max-w-3xl mx-auto drop-shadow-md'>
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center brightness-95 gap-3 sm:gap-4'>
          <Link
            href={`/${locale}/buy`}
            className='w-full sm:w-auto flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-primary text-base lg:text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105 active:scale-100'
          >
            {t('hero.browseHomes')}
          </Link>
          <Link
            href={user ? `/${locale}/dashboard/admin` : `/${locale}/partner-verification`}
            className='w-full sm:w-auto flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-white/95 backdrop-blur-sm text-base lg:text-lg font-bold text-charcoal transition-all hover:bg-white hover:shadow-xl hover:scale-105 active:scale-100'
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
