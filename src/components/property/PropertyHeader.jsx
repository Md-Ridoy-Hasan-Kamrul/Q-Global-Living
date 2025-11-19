'use client';

import { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * PropertyHeader Component - Optimized
 * Displays property title, location, price, and badge
 * Features: Responsive typography, status badge, price formatting, i18n support
 * Performance: Memoized to prevent unnecessary re-renders
 */
function PropertyHeader({
  title,
  location,
  price,
  priceUSD,
  developer,
  status = 'Verified',
}) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  // Format price with thousands separator
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

  return (
    <div className='space-y-2'>
      {/* Title and Status Badge */}
      <div className='flex items-start gap-2'>
        <h1 className='text-2xl  font-bold text-gray-900 leading-tight flex-1'>
          {title}
        </h1>
        {status && (
          <div className='flex items-center gap-1 bg-yellow-500 text-gray-900 px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            {status}
          </div>
        )}
        {/* Verified Badge Icon */}
        <div className='shrink-0'>
          <svg
            className='w-5 h-5 text-blue-500'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>

      {/* Location */}
      <div className='text-gray-600 text-sm'>{location}</div>

      {/* Developer */}
      {developer && (
        <p className='text-xs text-gray-700'>
          {t('buy.property.developedBy')}{' '}
          <span className='font-semibold text-gray-900'>{developer}</span>
        </p>
      )}

      {/* Price Section */}
      <div className='pt-4 border-t border-gray-200'>
        <p className='text-sm text-gray-600 mb-1'>
          {t('buy.property.priceLabel')}
        </p>
        <div className='flex flex-col'>
          <p className='text-3xl xl:text-4xl font-bold text-yellow-600'>
            {formatPrice(price)} XOF
          </p>
          {priceUSD && (
            <p className='text-sm text-gray-600 mt-1'>
              {t('buy.property.approx')} ${formatPrice(priceUSD)} USD
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(PropertyHeader);
