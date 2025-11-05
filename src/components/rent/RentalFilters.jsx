'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import { useState, useEffect } from 'react';

/**
 * RentalFilters Component
 * Provides filtering functionality for rental properties
 * Mobile-responsive with modal on small screens, inline on large screens
 *
 * @param {Function} onFilterChange - Callback when filters are applied
 * @param {Object} initialFilters - Initial filter values
 */
export default function RentalFilters({ onFilterChange, initialFilters = {} }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    city: false,
    bedrooms: false,
    duration: false,
  });
  const [filters, setFilters] = useState({
    city: initialFilters.city || 'abidjan',
    bedrooms: initialFilters.bedrooms || 'any',
    duration: initialFilters.duration || 'any',
    priceRange: initialFilters.priceRange || 50,
    verifiedOnly: initialFilters.verifiedOnly ?? true,
  });

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle dropdown open/close
  const handleDropdownFocus = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: true }));
  };

  const handleDropdownBlur = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: false }));
  };

  // Apply filters
  const applyFilters = () => {
    onFilterChange(filters);
    setIsOpen(false);
  };

  // Toggle mobile filter modal
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className='lg:hidden mb-4'>
        <button
          onClick={toggleFilters}
          className='flex w-full items-center justify-between rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-3 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          aria-label='Open filters'
          aria-expanded={isOpen}
        >
          <span className='text-sm font-semibold text-gray-900 dark:text-white'>
            {t('rent.filters.title')}
          </span>
          <svg
            className='w-5 h-5 text-gray-600 dark:text-gray-300'
            fill='currentColor'
            viewBox='0 0 20 20'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {/* Desktop Filters */}
      <div className='hidden lg:block p-4 rounded-xl bg-white dark:bg-card-dark shadow-sm border border-gray-200 dark:border-border-dark'>
        <div className='flex items-end gap-4'>
          {/* City */}
          <div className='flex-1 min-w-[200px]'>
            <label
              htmlFor='city-desktop'
              className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'
            >
              {t('rent.filters.cityLabel')}
            </label>
            <div className='relative'>
              <select
                id='city-desktop'
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                onFocus={() => handleDropdownFocus('city')}
                onBlur={() => handleDropdownBlur('city')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
                aria-label='Select city'
              >
                <option value='abidjan'>
                  {t('rent.filters.cities.abidjan')}
                </option>
                <option value='assinie'>
                  {t('rent.filters.cities.assinie')}
                </option>
                <option value='yamoussoukro'>
                  {t('rent.filters.cities.yamoussoukro')}
                </option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg
                  className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                    openDropdowns.city ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className='shrink-0 w-[140px]'>
            <label
              htmlFor='bedrooms-desktop'
              className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'
            >
              {t('rent.filters.bedroomsLabel')}
            </label>
            <div className='relative'>
              <select
                id='bedrooms-desktop'
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                onFocus={() => handleDropdownFocus('bedrooms')}
                onBlur={() => handleDropdownBlur('bedrooms')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
                aria-label='Select number of bedrooms'
              >
                <option value='any'>{t('rent.filters.bedrooms.any')}</option>
                <option value='1'>{t('rent.filters.bedrooms.one')}</option>
                <option value='2'>{t('rent.filters.bedrooms.two')}</option>
                <option value='3+'>
                  {t('rent.filters.bedrooms.threePlus')}
                </option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg
                  className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                    openDropdowns.bedrooms ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className='shrink-0 w-[140px]'>
            <label
              htmlFor='duration-desktop'
              className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'
            >
              {t('rent.filters.durationLabel')}
            </label>
            <div className='relative'>
              <select
                id='duration-desktop'
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                onFocus={() => handleDropdownFocus('duration')}
                onBlur={() => handleDropdownBlur('duration')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
                aria-label='Select rental duration'
              >
                <option value='any'>{t('rent.filters.duration.any')}</option>
                <option value='short-term'>
                  {t('rent.filters.duration.shortTerm')}
                </option>
                <option value='long-term'>
                  {t('rent.filters.duration.longTerm')}
                </option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg
                  className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                    openDropdowns.duration ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className='flex-1 min-w-[200px]'>
            <label
              htmlFor='price-desktop'
              className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'
            >
              {t('rent.filters.priceRangeLabel')}
            </label>
            <input
              type='range'
              id='price-desktop'
              min='0'
              max='100'
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary'
              style={{ accentColor: '#D4AF37' }}
              aria-label='Price range slider'
            />
          </div>

          {/* Verified Only */}
          <div className='shrink-0 flex items-center gap-2 h-10'>
            <input
              type='checkbox'
              id='verified-desktop'
              checked={filters.verifiedOnly}
              onChange={(e) =>
                handleFilterChange('verifiedOnly', e.target.checked)
              }
              className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer'
              style={{ accentColor: '#D4AF37' }}
              aria-label='Show only verified properties'
            />
            <label
              htmlFor='verified-desktop'
              className='text-sm font-medium text-gray-900 dark:text-white cursor-pointer whitespace-nowrap'
            >
              {t('rent.filters.verifiedOnly')}
            </label>
          </div>

          {/* Search Button */}
          <div className='shrink-0'>
            <button
              onClick={applyFilters}
              className='h-10 px-6 bg-primary text-background-dark text-sm font-bold rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap'
              style={{ backgroundColor: '#D4AF37' }}
              aria-label='Apply filters'
            >
              {t('rent.filters.search')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 lg:hidden'
          role='dialog'
          aria-modal='true'
          aria-labelledby='mobile-filters-title'
        >
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
            aria-hidden='true'
          />

          {/* Modal Content */}
          <div className='fixed inset-x-0 bottom-0 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-border-dark rounded-t-xl p-6 shadow-2xl transform transition-transform duration-300 ease-out max-h-[85vh] overflow-y-auto'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
              <h3
                id='mobile-filters-title'
                className='text-lg font-bold text-gray-900 dark:text-white'
              >
                {t('rent.filters.title')}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label='Close filters'
              >
                <svg
                  className='w-5 h-5 text-gray-600 dark:text-gray-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>

            {/* Filter Options */}
            <div className='space-y-6'>
              {/* City */}
              <div>
                <label
                  htmlFor='city-mobile'
                  className='text-sm font-medium text-gray-900 dark:text-white block mb-2'
                >
                  {t('rent.filters.cityLabel')}
                </label>
                <select
                  id='city-mobile'
                  value={filters.city}
                  onChange={(e) => handleFilterChange('city', e.target.value)}
                  className='w-full p-3 rounded-lg border-gray-300 dark:border-border-dark bg-gray-50 dark:bg-background-dark focus:ring-primary focus:border-primary'
                >
                  <option value='abidjan'>
                    {t('rent.filters.cities.abidjan')}
                  </option>
                  <option value='assinie'>
                    {t('rent.filters.cities.assinie')}
                  </option>
                  <option value='yamoussoukro'>
                    {t('rent.filters.cities.yamoussoukro')}
                  </option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label
                  htmlFor='price-mobile'
                  className='text-sm font-medium text-gray-900 dark:text-white block mb-2'
                >
                  {t('rent.filters.priceRangeLabel')}
                </label>
                <input
                  type='range'
                  id='price-mobile'
                  min='0'
                  max='100'
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange('priceRange', e.target.value)
                  }
                  className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary'
                />
                <div className='flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1'>
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className='text-sm font-medium text-gray-900 dark:text-white block mb-2'>
                  {t('rent.filters.durationLabel')}
                </label>
                <div className='grid grid-cols-3 gap-2'>
                  <button
                    onClick={() => handleFilterChange('duration', 'any')}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      filters.duration === 'any'
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'border-gray-300 dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {t('rent.filters.duration.any')}
                  </button>
                  <button
                    onClick={() => handleFilterChange('duration', 'short-term')}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      filters.duration === 'short-term'
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'border-gray-300 dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {t('rent.filters.duration.shortTerm')}
                  </button>
                  <button
                    onClick={() => handleFilterChange('duration', 'long-term')}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      filters.duration === 'long-term'
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'border-gray-300 dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {t('rent.filters.duration.longTerm')}
                  </button>
                </div>
              </div>

              {/* Verified Only Toggle */}
              <div className='flex items-center justify-between pt-2'>
                <label
                  htmlFor='verified-mobile'
                  className='text-sm font-medium text-gray-900 dark:text-white'
                >
                  {t('rent.filters.verifiedOnly')}
                </label>
                <div className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    id='verified-mobile'
                    checked={filters.verifiedOnly}
                    onChange={(e) =>
                      handleFilterChange('verifiedOnly', e.target.checked)
                    }
                    className='sr-only peer'
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </div>
              </div>

              {/* Apply Button */}
              <div className='pt-4'>
                <button
                  onClick={applyFilters}
                  className='w-full h-12 px-6 bg-primary text-background-dark text-base font-bold rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                >
                  {t('rent.filters.applyFilters')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
