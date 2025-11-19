'use client';

import React from 'react';
import Link from 'next/link';

const ContactCTA = React.memo(
  ({ title, subtitle, primaryButton, secondaryButton }) => {
    return (
      <section className=' w-full rounded-xl bg-white/20 py-8 dark:bg-[#D4AF37]/10 border border-gray-200 shadow-sm '>
        <div className='flex flex-col items-center gap-4 px-4 text-center sm:gap-6 sm:px-6 lg:px-8'>
          {/* Heading */}
          <h2 className='font-heading text-[24px] font-bold text-navy dark:text-white sm:text-[28px] leading-tight md:text-[32px] lg:text-[40px]'>
            {title}
          </h2>

          {/* Subtitle */}
          <p className='max-w-2xl text-[14px] text-navy/80 dark:text-[#FFFFF0]/80 sm:text-[15px] md:text-base'>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className='mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:w-auto sm:flex-row sm:gap-4'>
            {/* Primary Button */}
            <Link
              href='/concierge'
              className='flex h-11 min-w-40 items-center justify-center rounded-lg bg-accent px-5 text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:bg-[#D4AF37] dark:text-navy sm:h-12 sm:min-w-44 sm:text-base'
            >
              <span>{primaryButton}</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href='/faq'
              className='flex h-11 min-w-40 items-center justify-center rounded-lg border border-gray-200 bg-navy/5 px-5 text-[14px] font-bold text-navy transition-all duration-200 hover:bg-navy/10 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:bg-[#FFFFF0]/10 dark:text-[#FFFFF0] dark:hover:bg-[#FFFFF0]/20 sm:h-12 sm:min-w-44 sm:text-base'
            >
              <span>{secondaryButton}</span>
            </Link>
          </div>
        </div>
      </section>
    );


  }
);

ContactCTA.displayName = 'ContactCTA';

export default ContactCTA;
