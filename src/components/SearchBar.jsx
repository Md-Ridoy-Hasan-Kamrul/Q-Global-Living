'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { getTranslation } from '@/i18n';

export default function SearchBar({ locale = 'en' }) {
  const [searchType, setSearchType] = useState('buy');
  const [showAllFilters, setShowAllFilters] = useState(false);

  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <section className='relative z-10 -mt-20 sm:-mt-16 px-4 sm:px-6'>
      <div className='mx-auto max-w-6xl rounded-2xl bg-[#F5F3EF] dark:bg-charcoal/95 p-4 sm:p-6 shadow-2xl'>
        {/* Mobile: Stack filters vertically */}
        <div className='block lg:hidden space-y-3'>
          {/* Primary filters always visible */}
          <div className='grid grid-cols-2 gap-2 sm:gap-3'>
            <button className='flex h-11 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-95'>
              <span className='text-sm font-medium truncate'>
                {t('searchBar.buy')}
              </span>
              <svg
                className='h-4 w-4 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            <button className='flex h-11 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-95'>
              <span className='text-sm font-medium truncate'>
                {t('searchBar.cityArea')}
              </span>
              <svg
                className='h-4 w-4 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          {/* Toggle additional filters */}
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className='flex w-full h-11 items-center justify-center gap-2 rounded-lg bg-white/60 dark:bg-charcoal/30 px-3 py-2.5 text-charcoal dark:text-soft-grey text-sm font-medium transition-all hover:bg-white dark:hover:bg-charcoal/50'
          >
            <SlidersHorizontal className='h-4 w-4' />
            {showAllFilters ? 'Hide Filters' : 'More Filters'}
          </button>

          {/* Additional filters - collapsible on mobile */}
          {showAllFilters && (
            <div className='grid grid-cols-2 gap-2 sm:gap-3'>
              <button className='flex h-11 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-95'>
                <span className='text-sm font-medium truncate'>
                  {t('searchBar.priceRange')}
                </span>
                <svg
                  className='h-4 w-4 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              <button className='flex h-11 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-95'>
                <span className='text-sm font-medium truncate'>
                  {t('searchBar.bedrooms')}
                </span>
                <svg
                  className='h-4 w-4 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              <button className='flex h-11 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-95 col-span-2'>
                <span className='text-sm font-medium truncate'>
                  {t('searchBar.propertyType')}
                </span>
                <svg
                  className='h-4 w-4 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Search button - full width on mobile */}
          <button className='flex w-full h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95'>
            <Search className='h-5 w-5' />
            <span>{t('searchBar.search')}</span>
          </button>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className='hidden lg:flex items-center gap-3'>
          <button className='flex h-11 min-w-[120px] flex-1 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-[0.98]'>
            <span className='text-sm font-medium whitespace-nowrap'>
              {t('searchBar.buy')}
            </span>
            <svg
              className='h-5 w-5 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button className='flex h-11 min-w-[120px] flex-1 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-[0.98]'>
            <span className='text-sm font-medium whitespace-nowrap'>
              {t('searchBar.cityArea')}
            </span>
            <svg
              className='h-5 w-5 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button className='flex h-11 min-w-[120px] flex-1 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-[0.98]'>
            <span className='text-sm font-medium whitespace-nowrap'>
              {t('searchBar.priceRange')}
            </span>
            <svg
              className='h-5 w-5 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button className='flex h-11 min-w-[120px] flex-1 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-[0.98]'>
            <span className='text-sm font-medium whitespace-nowrap'>
              {t('searchBar.bedrooms')}
            </span>
            <svg
              className='h-5 w-5 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button className='flex h-11 min-w-[120px] flex-1 items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md active:scale-[0.98]'>
            <span className='text-sm font-medium whitespace-nowrap'>
              {t('searchBar.propertyType')}
            </span>
            <svg
              className='h-5 w-5 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button className='flex h-11 min-w-[140px] shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]'>
            <Search className='h-5 w-5' />
            <span className='truncate'>{t('searchBar.search')}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
