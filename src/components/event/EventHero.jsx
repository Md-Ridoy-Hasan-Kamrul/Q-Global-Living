'use client';

import { memo } from 'react';
import CountdownTimer from './CountdownTimer';

const EventHero = memo(({ translations, countdownTranslations }) => {
  // Set event date: October 26, 2026 at 7:00 PM GMT
  const eventDate = new Date('2026-10-26T19:00:00Z');

  return (
    <div className='relative bg-linear-to-br from-[#1e3a5f] via-[#2d5078] to-[#3a5a7a] rounded-2xl overflow-hidden'>
      {/* Background overlay */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        }}
      />

      <div className='relative px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Title */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight'>
            {translations.title}
          </h1>

          {/* Subtitle */}
          <p className='text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed'>
            {translations.subtitle}
          </p>

          {/* Countdown Timer */}
          <div className='mb-8 sm:mb-10'>
            <CountdownTimer
              targetDate={eventDate}
              translations={countdownTranslations}
            />
          </div>

          {/* CTA Button */}
          <button className='bg-[#E6B325] hover:bg-[#d4a420] text-[#0F1B2E] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
            {translations.cta}
          </button>
        </div>
      </div>
    </div>
  );
});

EventHero.displayName = 'EventHero';

export default EventHero;
