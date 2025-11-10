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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    cityArea: 'all',
    developmentStage: 'all',
    propertyType: 'all',
    priceRange: 'all'
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

  const filters = [
    {
      id: 'cityArea',
      label: t('newDevelopments.filters.cityArea'),
      icon: 'expand_more',
    },
    {
      id: 'developmentStage',
      label: t('newDevelopments.filters.developmentStage'),
      icon: 'expand_more',
    },
    {
      id: 'propertyType',
      label: t('newDevelopments.filters.propertyType'),
      icon: 'expand_more',
    },
    {
      id: 'priceRange',
      label: t('newDevelopments.filters.priceRange'),
      icon: 'expand_more',
    },
  ];

  const handleFilterClick = (filterId) => {
    setOpenDropdown(openDropdown === filterId ? null : filterId);
  };

  const handleOptionSelect = (filterId, value) => {
    const newFilters = { ...selectedFilters, [filterId]: value };
    setSelectedFilters(newFilters);
    setOpenDropdown(null);
    onFilterChange?.(newFilters);
  };

  return (
    <div
      className='flex flex-wrap items-center gap-3 p-3 my-8 bg-[#fafafa] border border-gray-200 dark:bg-navy/20 rounded-xl shadow-xs'
      role='group'
      aria-label='Property filters'
    >
      {filters.map((filter) => (
        <div key={filter.id} className='relative flex-1 sm:flex-none'>
          <button
            onClick={() => handleFilterClick(filter.id)}
            className='flex h-10 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light border border-gray-200 dark:bg-navy-light pl-4 pr-3 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap'
            aria-label={`Filter by ${filter.label}`}
            aria-haspopup='true'
            aria-expanded={openDropdown === filter.id}
          >
            <p className='text-sm font-medium leading-normal'>{filter.label}</p>
            <span
              className={`material-symbols-outlined text-gray-500 dark:text-gray-400 transition-transform ${openDropdown === filter.id ? 'rotate-180' : ''}`}
              aria-hidden='true'
            >
              {filter.icon}
            </span>
          </button>

          {openDropdown === filter.id && (
            <>
              <div 
                className='fixed inset-0 z-10' 
                onClick={() => setOpenDropdown(null)}
                aria-hidden='true'
              />
              <div className='absolute top-full left-0 mt-2 w-full sm:w-64 bg-white dark:bg-navy-light border border-gray-200 dark:border-border-dark rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto'>
                {filterOptions[filter.id]?.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(filter.id, option.value)}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      selectedFilters[filter.id] === option.value 
                        ? 'bg-[#f6efcb] dark:bg-[#C5A572]/20 font-medium text-[#C5A572]' 
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
