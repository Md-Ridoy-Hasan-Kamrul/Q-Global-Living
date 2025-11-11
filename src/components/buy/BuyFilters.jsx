'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import { useState } from 'react';

/**
 * BuyFilters Component
 * Provides filtering functionality for buy properties
 * Mobile-responsive with modal on small screens, inline on large screens
 *
 * @param {Function} onFilterChange - Callback when filters are applied
 * @param {Object} initialFilters - Initial filter values
 */
export default function BuyFilters({ onFilterChange, initialFilters = {} }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  // Replicate RentalFilters interactions and styling
  const [openDropdowns, setOpenDropdowns] = useState({
    city: false,
    bedrooms: false,
    propertyType: false,
  });

  const [filters, setFilters] = useState({
    city: initialFilters.city || 'abidjan',
    bedrooms: initialFilters.bedrooms || 'any',
    propertyType: initialFilters.propertyType || 'any',
    priceRange: initialFilters.priceRange || 50,
    verifiedOnly: initialFilters.verifiedOnly ?? true,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleDropdownFocus = (key) =>
    setOpenDropdowns((prev) => ({ ...prev, [key]: true }));
  const handleDropdownBlur = (key) =>
    setOpenDropdowns((prev) => ({ ...prev, [key]: false }));

  const applyFilters = () => onFilterChange(filters);

  return (
    <>
      <div className='p-4 rounded-xl bg-[#fafafa] dark:bg-card-dark shadow-sm border border-gray-200 dark:border-border-dark'>
        {/* Mobile stacked layout */}
        <div className='flex flex-col gap-3 lg:hidden'>
          <div className='grid grid-cols-3 gap-2'>
            {/* City */}
            <div className='flex flex-col'>
              <label htmlFor='city-mobile' className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('buy.filters.cityLabel')}
              </label>
              <div className='relative'>
                <select
                  id='city-mobile'
                  value={filters.city}
                  onChange={(e) => { handleFilterChange('city', e.target.value); applyFilters(); }}
                  onFocus={() => handleDropdownFocus('city')}
                  onBlur={() => handleDropdownBlur('city')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none'
                >
                  <option value='abidjan'>{t('buy.filters.cities.abidjan', 'Abidjan')}</option>
                  <option value='assinie'>{t('buy.filters.cities.assinie', 'Assinie-Mafia')}</option>
                  <option value='yamoussoukro'>{t('buy.filters.cities.yamoussoukro', 'Yamoussoukro')}</option>
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.city ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bedrooms */}
            <div className='flex flex-col'>
              <label htmlFor='bedrooms-mobile' className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('buy.filters.bedroomsLabel')}
              </label>
              <div className='relative'>
                <select
                  id='bedrooms-mobile'
                  value={filters.bedrooms}
                  onChange={(e) => { handleFilterChange('bedrooms', e.target.value); applyFilters(); }}
                  onFocus={() => handleDropdownFocus('bedrooms')}
                  onBlur={() => handleDropdownBlur('bedrooms')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-1  focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none!'
                >
                  <option value='any'>{t('buy.filters.bedrooms.any', 'Any')}</option>
                  <option value='1'>{t('buy.filters.bedrooms.one', '1')}</option>
                  <option value='2'>{t('buy.filters.bedrooms.two', '2')}</option>
                  <option value='3+'>{t('buy.filters.bedrooms.threePlus', '3+')}</option>
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.bedrooms ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className='flex flex-col'>
              <label htmlFor='type-mobile' className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('buy.filters.propertyTypeLabel')}
              </label>
              <div className='relative'>
                <select
                  id='type-mobile'
                  value={filters.propertyType}
                  onChange={(e) => { handleFilterChange('propertyType', e.target.value); applyFilters(); }}
                  onFocus={() => handleDropdownFocus('propertyType')}
                  onBlur={() => handleDropdownBlur('propertyType')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer'
                >
                  <option value='any'>{t('buy.filters.any', 'Any')}</option>
                  <option value='villa'>{t('buy.propertyTypes.villa', 'Villa')}</option>
                  <option value='house'>{t('buy.propertyTypes.house', 'House')}</option>
                  <option value='apartment'>{t('buy.propertyTypes.apartment', 'Apartment')}</option>
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.propertyType ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className='flex flex-col'>
            <label htmlFor='price-mobile' className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
              {t('buy.filters.priceRangeLabel', 'Price Range (XOF)')}
            </label>
            <input
              type='range'
              id='price-mobile'
              min='0'
              max='100'
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              onMouseUp={applyFilters}
              onTouchEnd={applyFilters}
              className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary'
              style={{ accentColor: '#D4AF37' }}
            />
          </div>

          {/* Verified + Search */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2 flex-1'>
              <input
                type='checkbox'
                id='verified-mobile'
                checked={filters.verifiedOnly}
                onChange={(e) => { handleFilterChange('verifiedOnly', e.target.checked); applyFilters(); }}
                className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer'
                style={{ accentColor: '#D4AF37' }}
              />
              <label htmlFor='verified-mobile' className='text-xs font-medium text-gray-900 dark:text-white cursor-pointer whitespace-nowrap'>
                {t('buy.filters.verifiedOnly')}
              </label>
            </div>
            <button
              onClick={applyFilters}
              className='h-9 px-6 bg-primary text-background-dark text-xs font-bold rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap'
              style={{ backgroundColor: '#D4AF37' }}
            >
              {t('buy.filters.search', 'Search')}
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className='hidden lg:flex items-end gap-4'>
          {/* City */}
          <div className='flex-1 min-w-[200px]'>
            <label htmlFor='city-desktop' className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
              {t('buy.filters.cityLabel')}
            </label>
            <div className='relative'>
              <select
                id='city-desktop'
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                onFocus={() => handleDropdownFocus('city')}
                onBlur={() => handleDropdownBlur('city')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
              >
                <option value='abidjan'>{t('buy.filters.cities.abidjan', 'Abidjan')}</option>
                <option value='assinie'>{t('buy.filters.cities.assinie', 'Assinie-Mafia')}</option>
                <option value='yamoussoukro'>{t('buy.filters.cities.yamoussoukro', 'Yamoussoukro')}</option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.city ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className='shrink-0 w-[140px]'>
            <label htmlFor='bedrooms-desktop' className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
              {t('buy.filters.bedroomsLabel')}
            </label>
            <div className='relative'>
              <select
                id='bedrooms-desktop'
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                onFocus={() => handleDropdownFocus('bedrooms')}
                onBlur={() => handleDropdownBlur('bedrooms')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
              >
                <option value='any'>{t('buy.filters.bedrooms.any', 'Any')}</option>
                <option value='1'>{t('buy.filters.bedrooms.one', '1')}</option>
                <option value='2'>{t('buy.filters.bedrooms.two', '2')}</option>
                <option value='3+'>{t('buy.filters.bedrooms.threePlus', '3+')}</option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.bedrooms ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className='shrink-0 w-[150px]'>
            <label htmlFor='type-desktop' className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
              {t('buy.filters.propertyTypeLabel')}
            </label>
            <div className='relative'>
              <select
                id='type-desktop'
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                onFocus={() => handleDropdownFocus('propertyType')}
                onBlur={() => handleDropdownBlur('propertyType')}
                className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-[#FFFFF0] dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer'
              >
                <option value='any'>{t('buy.filters.any', 'Any')}</option>
                <option value='villa'>{t('buy.propertyTypes.villa', 'Villa')}</option>
                <option value='house'>{t('buy.propertyTypes.house', 'House')}</option>
                <option value='apartment'>{t('buy.propertyTypes.apartment', 'Apartment')}</option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openDropdowns.propertyType ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className='flex-1 min-w-[150px]'>
            <label htmlFor='price-desktop' className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
              {t('buy.filters.priceRangeLabel', 'Price Range (XOF)')}
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
            />
          </div>

          {/* Verified Only */}
          <div className='shrink-0 flex items-center gap-2 h-10'>
            <input
              type='checkbox'
              id='verified-desktop'
              checked={filters.verifiedOnly}
              onChange={(e) => handleFilterChange('verifiedOnly', e.target.checked)}
              className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer'
              style={{ accentColor: '#D4AF37' }}
            />
            <label htmlFor='verified-desktop' className='text-sm font-medium text-gray-900 dark:text-white cursor-pointer whitespace-nowrap'>
              {t('buy.filters.verifiedOnly')}
            </label>
          </div>

          {/* Search Button */}
          <div className='shrink-0'>
            <button
              onClick={applyFilters}
              className='h-10 px-6 bg-primary text-background-dark text-sm font-bold rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap'
              style={{ backgroundColor: '#D4AF37' }}
            >
              {t('buy.filters.search', 'Search')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
