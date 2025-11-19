'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * DevelopmentFilters Component
 *
 * Filter chips component for new development properties.
 * Includes City/Area, Development Stage, Property Type, and Price Range filters.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onFilterChange - Callback when filter changes
 */
export default function DevelopmentFilters({ onFilterChange }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [selectedFilters, setSelectedFilters] = useState({
    cityArea: 'all',
    developmentStage: 'all',
    propertyType: 'all',
    priceRange: 'all'
  });
  // Track focus state of each select to rotate chevron like Buy/Rent filters
  const [openSelect, setOpenSelect] = useState({
    cityArea: false,
    developmentStage: false,
    propertyType: false,
    priceRange: false,
  });

  const filterOptions = {
    cityArea: [
      { value: 'all', label: t('newDevelopments.filters.allCities', 'All Cities') },
      { value: 'abidjan', label: t('newDevelopments.filters.cities.abidjan', 'Abidjan') },
      { value: 'grandBassam', label: t('newDevelopments.filters.cities.grandBassam', 'Grand-Bassam') },
      { value: 'assinie', label: t('newDevelopments.filters.cities.assinie', 'Assinie') },
      { value: 'sanPedro', label: t('newDevelopments.filters.cities.sanPedro', 'San-Pédro') }
    ],
    developmentStage: [
      { value: 'all', label: t('newDevelopments.filters.allStages', 'All Stages') },
      { value: 'planning', label: t('newDevelopments.filters.stages.planning', 'Planning') },
      { value: 'construction', label: t('newDevelopments.filters.stages.construction', 'Under Construction') },
      { value: 'completion', label: t('newDevelopments.filters.stages.completion', 'Near Completion') },
      { value: 'readyToMove', label: t('newDevelopments.filters.stages.readyToMove', 'Ready to Move') },
      { value: 'selling', label: t('newDevelopments.filters.stages.selling', 'Selling') }
    ],
    propertyType: [
      { value: 'all', label: t('newDevelopments.filters.allTypes', 'All Types') },
      { value: 'apartment', label: t('newDevelopments.filters.types.apartment', 'Apartment') },
      { value: 'villa', label: t('newDevelopments.filters.types.villa', 'Villa') },
      { value: 'penthouse', label: t('newDevelopments.filters.types.penthouse', 'Penthouse') },
      { value: 'townhouse', label: t('newDevelopments.filters.types.townhouse', 'Townhouse') },
      { value: 'duplex', label: t('newDevelopments.filters.types.duplex', 'Duplex') }
    ],
    priceRange: [
      { value: 'all', label: t('newDevelopments.filters.allPrices', 'All Prices') },
      { value: 'under100m', label: t('newDevelopments.filters.prices.under100m', 'Under 100M XOF') },
      { value: '100m-200m', label: t('newDevelopments.filters.prices.100m200m', '100M - 200M XOF') },
      { value: '200m-500m', label: t('newDevelopments.filters.prices.200m500m', '200M - 500M XOF') },
      { value: 'over500m', label: t('newDevelopments.filters.prices.over500m', 'Over 500M XOF') }
    ]
  };

  const handleSelectChange = (filterId, value) => {
    const newFilters = { ...selectedFilters, [filterId]: value };
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };
  const handleFocus = (key) => setOpenSelect((prev) => ({ ...prev, [key]: true }));
  const handleBlur = (key) => setOpenSelect((prev) => ({ ...prev, [key]: false }));

  return (
    <div className='w-full my-6' role='group' aria-label='Development filters'>
      <div className='p-4 rounded-xl bg-white/50 dark:bg-card-dark shadow-sm border border-gray-200 dark:border-border-dark'>
        {/* Mobile layout */}
        <div className='flex flex-col gap-4 lg:hidden'>
          <div className='grid grid-cols-2 gap-3'>
            {/* City/Area */}
            <div className='flex flex-col'>
              <label className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('newDevelopments.filters.cityArea')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.cityArea}
                  onChange={(e) => handleSelectChange('cityArea', e.target.value)}
                  onFocus={() => handleFocus('cityArea')}
                  onBlur={() => handleBlur('cityArea')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.cityArea.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.cityArea ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Development Stage */}
            <div className='flex flex-col'>
              <label className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('newDevelopments.filters.developmentStage')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.developmentStage}
                  onChange={(e) => handleSelectChange('developmentStage', e.target.value)}
                  onFocus={() => handleFocus('developmentStage')}
                  onBlur={() => handleBlur('developmentStage')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.developmentStage.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.developmentStage ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className='flex flex-col'>
              <label className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('newDevelopments.filters.propertyType')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.propertyType}
                  onChange={(e) => handleSelectChange('propertyType', e.target.value)}
                  onFocus={() => handleFocus('propertyType')}
                  onBlur={() => handleBlur('propertyType')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.propertyType.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.propertyType ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Price Range (categorical) */}
            <div className='flex flex-col'>
              <label className='text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1'>
                {t('newDevelopments.filters.priceRange')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.priceRange}
                  onChange={(e) => handleSelectChange('priceRange', e.target.value)}
                  onFocus={() => handleFocus('priceRange')}
                  onBlur={() => handleBlur('priceRange')}
                  className='w-full h-9 px-2 pr-7 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-xs appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.priceRange.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.priceRange ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className='hidden lg:flex items-end gap-4'>
          {/* City/Area */}
            <div className='flex-1 w-[180px]'>
              <label className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
                {t('newDevelopments.filters.cityArea')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.cityArea}
                  onChange={(e) => handleSelectChange('cityArea', e.target.value)}
                  onFocus={() => handleFocus('cityArea')}
                  onBlur={() => handleBlur('cityArea')}
                  className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.cityArea.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.cityArea ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Development Stage */}
            <div className='shrink-0 w-[200px]'>
              <label className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
                {t('newDevelopments.filters.developmentStage')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.developmentStage}
                  onChange={(e) => handleSelectChange('developmentStage', e.target.value)}
                  onFocus={() => handleFocus('developmentStage')}
                  onBlur={() => handleBlur('developmentStage')}
                  className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.developmentStage.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.developmentStage ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className='shrink-0 w-[180px]'>
              <label className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
                {t('newDevelopments.filters.propertyType')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.propertyType}
                  onChange={(e) => handleSelectChange('propertyType', e.target.value)}
                  onFocus={() => handleFocus('propertyType')}
                  onBlur={() => handleBlur('propertyType')}
                  className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.propertyType.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.propertyType ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className='shrink-0 w-[190px]'>
              <label className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 block mb-2'>
                {t('newDevelopments.filters.priceRange')}
              </label>
              <div className='relative'>
                <select
                  value={selectedFilters.priceRange}
                  onChange={(e) => handleSelectChange('priceRange', e.target.value)}
                  onFocus={() => handleFocus('priceRange')}
                  onBlur={() => handleBlur('priceRange')}
                  className='w-full h-10 px-3 pr-10 rounded-lg border border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer outline-none'
                >
                  {filterOptions.priceRange.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${openSelect.priceRange ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
