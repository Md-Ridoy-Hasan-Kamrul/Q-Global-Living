'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getTranslation } from '@/i18n';

export default function Testimonials({ testimonials, locale = 'en' }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.85;
      const newScrollLeft =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(checkScrollButtons, 350);
    }
  };

  return (
    <section className='py-6 lg:py-10 px-4 sm:px-6 lg:px-8 bg-soft-grey/30 dark:bg-charcoal/20'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-6 lg:mb-10'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight'>
            {t('testimonials.title')}
          </h2>
          <p className='mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-charcoal/80 dark:text-soft-grey/80'>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative'>
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 rounded-full bg-white dark:bg-charcoal border-2 border-primary/30 p-3 shadow-xl transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              aria-label='Scroll left'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 rounded-full bg-white dark:bg-charcoal border-2 border-primary/30 p-3 shadow-xl transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              aria-label='Scroll right'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className='flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth'
          >
            {testimonials.map((item) => (
              <article
                key={item.id}
                className='flex w-[85%] sm:w-[70%] md:w-[45%] lg:w-[calc(33.333%-1rem)] shrink-0 snap-center flex-col justify-between rounded-xl border border-primary/20 bg-background-light dark:bg-charcoal p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300'
              >
                {/* Quote */}
                <blockquote className='text-sm sm:text-base lg:text-lg leading-relaxed text-charcoal dark:text-soft-grey mb-6'>
                  <span className='text-3xl text-primary opacity-50'>
                    &ldquo;
                  </span>
                  {item.quote}
                  <span className='text-3xl text-primary opacity-50'>
                    &rdquo;
                  </span>
                </blockquote>

                {/* Author Info */}
                <div className='flex items-center gap-4 mt-auto'>
                  <div className='relative shrink-0'>
                    <Image
                      alt={item.name}
                      className='h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-primary/20'
                      src={item.imageUrl}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='font-bold text-sm sm:text-base text-charcoal dark:text-white truncate'>
                      {item.name}
                    </p>
                    <p className='text-xs sm:text-sm text-charcoal/70 dark:text-soft-grey/70 truncate'>
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Scroll Indicators */}
          <div className='flex md:hidden justify-center gap-2 mt-6'>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className='p-2 rounded-full bg-white dark:bg-charcoal border border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary hover:text-white active:scale-95'
              aria-label='Scroll left'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className='p-2 rounded-full bg-white dark:bg-charcoal border border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary hover:text-white active:scale-95'
              aria-label='Scroll right'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
