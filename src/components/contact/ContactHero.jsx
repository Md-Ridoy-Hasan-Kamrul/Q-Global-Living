'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactHero = React.memo(
  ({
    title,
    subtitle,
    whatsappButton,
    messageButton,
    whatsappNumber,
    whatsappMessage,
  }) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return (
      <section
        className='relative w-full overflow-hidden rounded-xl'
        aria-labelledby='contact-hero-title'
      >
        {/* Background Image with Overlay */}
        <div className='relative h-[480px] w-full'>
          <Image
            src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80'
            alt={subtitle}
            fill
            priority
            quality={85}
            sizes='(max-width: 1536px) 100vw, 1536px'
            className='object-cover'
          />

          {/* Dark Navy Overlay - #0A2240 with opacity */}
          <div
            className='absolute inset-0 bg-[#0A2240]/70'
            aria-hidden='true'
          />

          {/* Content */}
          <div className='relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center'>
            <div className='max-w-3xl space-y-4'>
              <h1
                id='contact-hero-title'
                className='font-black leading-[1.2] tracking-[-0.015em] text-white text-2xl sm:text-3xl lg:text-5xl'
              >
                {title}
              </h1>
              <p className='text-sm font-normal leading-relaxed text-gray-200 sm:text-base md:text-lg'>
                {subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4'>
              {/* WhatsApp Button */}
              <Link
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex min-w-[180px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-2.5 text-[14px] font-bold text-[#0A2240] transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A2240] sm:px-5 sm:py-3 sm:text-base'
              >
                <span className='material-symbols-outlined text-xl'>phone</span>
                <span>{whatsappButton}</span>
              </Link>

              {/* Send Message Button */}
              <a
                href='#contact-form'
                className='flex min-w-[180px] items-center justify-center rounded-lg bg-white px-4 py-2.5 text-[14px] font-bold text-[#0A2240] transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A2240] dark:bg-[#FFFFF0] sm:px-5 sm:py-3 sm:text-base'
              >
                <span>{messageButton}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactHero.displayName = 'ContactHero';

export default ContactHero;
