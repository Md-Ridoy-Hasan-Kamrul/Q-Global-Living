'use client';

import { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * RentalOverview Component - Optimized
 * Displays rental-specific information
 * Features: Rental duration, furnishing status, deposit terms, i18n support
 * Performance: Memoized to prevent unnecessary re-renders
 */
function RentalOverview({ rental }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  if (!rental) return null;

  const {
    duration = '12 Months (Minimum)',
    furnishing = 'Unfurnished',
    deposit = '2 Months Deposit',
  } = rental;

  return (
    <div className='bg-background-light border border-[#f6efcb] shadow-sm rounded-lg p-6'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        {t('buy.property.rentalOverview')}
      </h3>

      <div className='space-y-4'>
        {/* Rental Duration */}
        <div className='flex items-start justify-between pb-3 border-b border-gray-200'>
          <span className='text-gray-600'>
            {t('buy.property.rentalDuration')}
          </span>
          <span className='font-medium text-gray-900 text-right'>
            {duration}
          </span>
        </div>

        {/* Furnishing */}
        <div className='flex items-start justify-between pb-3 border-b border-gray-200'>
          <span className='text-gray-600'>{t('buy.property.furnishing')}</span>
          <span className='font-medium text-gray-900'>{furnishing}</span>
        </div>

        {/* Deposit Terms */}
        <div className='flex items-start justify-between'>
          <span className='text-gray-600'>{t('buy.property.terms')}</span>
          <span className='font-medium text-gray-900 text-right'>
            {deposit}
          </span>
        </div>
      </div>

      {/* Talk to Concierge Button */}
      <button className='mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2'>
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
          />
        </svg>
        <span>{t('buy.property.talkConcierge')}</span>
      </button>
    </div>
  );
}

export default memo(RentalOverview);
