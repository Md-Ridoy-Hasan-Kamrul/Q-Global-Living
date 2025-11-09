'use client';

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
    // Future implementation: open dropdown/modal for filter selection
    onFilterChange?.(filterId);
  };

  return (
    <div
      className='flex flex-wrap items-center gap-3 p-3 my-8 bg-[#fffff7] border border-gray-200 dark:bg-navy/20 rounded-xl shadow-xs'
      role='group'
      aria-label='Property filters'
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className='flex h-10 flex-1 sm:flex-none shrink-0 items-center justify-center gap-x-2 rounded-lg bg-soft-grey dark:bg-navy-light pl-4 pr-3 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap'
          aria-label={`Filter by ${filter.label}`}
          aria-haspopup='true'
        >
          <p className='text-sm font-medium leading-normal'>{filter.label}</p>
          <span
            className='material-symbols-outlined text-gray-500 dark:text-gray-400'
            aria-hidden='true'
          >
            {filter.icon}
          </span>
        </button>
      ))}
    </div>
  );
}
