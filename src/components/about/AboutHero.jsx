'use client';

import Image from 'next/image';
import { memo } from 'react';

/**
 * AboutHero Component - Pixel-perfect design
 * Hero section for the About page with background image and main headline
 */
const AboutHero = memo(({ title, subtitle }) => {
  return (
    <section
      className='relative w-full overflow-hidden rounded-xl'
      aria-labelledby='about-hero-title'
    >
      {/* Background Image with Overlay */}
      <div className='relative h-[480px] w-full'>
        <Image
          src='https://lh3.googleusercontent.com/aida-public/AB6AXuBUsrsFcXI85V3QiOO5Yd_WVl6mXNXVgBBRs7kUHtDPSeHrJeGvQvF0HtLMSNR70T88p9YqCpj5mZqKKKtu8YuWbqt0SGFpGFcKnZmLVUrdC2A0WtgPFJ_W2IE9DnRLXzZaul96OruZDn2l6aDS1fsx8t-aNs9fTWbzPahniARx9A6xOBgwMtfbZuhCTeNHYKaKo64DVVnzDq6dV2h2wpm8_KfZRzrdPwJetDUpibx5by9HDVnHe8-B5NY15zq9yF9A2kiz6qvZlS4'
          alt="Panoramic view of modern architecture in Abidjan, Côte d'Ivoire at dusk"
          fill
          priority
          quality={85}
          sizes='(max-width: 1536px) 100vw, 1536px'
          className='object-cover'
        />

        {/* Dark Navy Overlay - #0A2240 with opacity */}
        <div className='absolute inset-0 bg-[#0A2240]/70' aria-hidden='true' />

        {/* Content */}
        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6'>
          <div className='max-w-4xl space-y-4'>
            <h1
              id='about-hero-title'
              className='text-[28px] font-black leading-[1.2] tracking-[-0.015em] text-white sm:text-[36px] md:text-[48px] lg:text-[64px]'
            >
              {title}
            </h1>
            <p className='text-sm font-normal leading-relaxed text-gray-200 sm:text-base md:text-lg'>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;
