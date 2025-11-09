'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * DevelopmentCard Component
 *
 * A reusable card component for displaying new development properties.
 * Follows production-grade best practices with proper optimization and accessibility.
 *
 * @param {Object} props - Component props
 * @param {Object} props.development - Development data object
 * @param {string} props.development.id - Unique identifier
 * @param {string} props.development.title - Development title
 * @param {string} props.development.developer - Developer name
 * @param {string} props.development.location - Location string
 * @param {string} props.development.propertyType - Property type (e.g., "2-3 BR Apartments")
 * @param {number} props.development.priceXOF - Price in XOF
 * @param {number} props.development.priceUSD - Price in USD
 * @param {string} props.development.image - Image URL
 * @param {boolean} props.development.verified - Verification status
 * @param {boolean} props.development.escrowEligible - Escrow eligibility status
 * @param {Function} props.onViewDetails - Callback for view details action
 * @param {Function} props.onInquire - Callback for inquire action
 */
export default function DevelopmentCard({
  development,
  onViewDetails,
  onInquire,
}) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const handleInquire = () => {
    onInquire?.(development.id);
  };

  return (
    <article
      className='flex flex-col gap-3 rounded-xl bg-background-light border border-[#f6efcb] dark:bg-navy/20 shadow-md overflow-hidden group'
      role='article'
      aria-labelledby={`development-title-${development.id}`}
    >
      {/* Image Container */}
      <div className='relative w-full aspect-video overflow-hidden'>
        <div
          className='w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105'
          style={{
            backgroundImage: `url("${development.image}")`,
            willChange: 'transform',
          }}
          role='img'
          aria-label={`Image of ${development.title}`}
        />

        {/* Badges */}
        <div
          className='absolute top-2 left-2 flex flex-col gap-1.5'
          aria-label='Property badges'
        >
          {development.verified && (
            <div
              className='flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded-full'
              role='status'
              aria-label='Verified property'
            >
              <span
                className='material-symbols-outlined text-[16px]!'
                aria-hidden='true'
              >
                verified
              </span>
              <span>{t('newDevelopments.card.verifiedByQHomes')}</span>
            </div>
          )}

          {development.escrowEligible && (
            <div
              className='flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded-full'
              role='status'
              aria-label='Escrow eligible'
            >
              <span
                className='material-symbols-outlined text-[16px]!'
                aria-hidden='true'
              >
                account_balance
              </span>
              <span>{t('newDevelopments.card.escrowEligible')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='p-4 flex flex-col gap-3'>
        {/* Title & Developer Info */}
        <div>
          <h3
            id={`development-title-${development.id}`}
            className='text-navy dark:text-white text-lg font-bold leading-normal'
          >
            {development.title}
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal'>
            {t('newDevelopments.card.by')} {development.developer}
          </p>
          <p className='text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal'>
            {development.location}
          </p>
        </div>

        {/* Price Section */}
        <div className='border-t border-gray-200 dark:border-gray-700 pt-3'>
          <p className='text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal'>
            {development.propertyType}
          </p>
          <p className='text-accent text-base sm:text-lg font-bold leading-normal'>
            {t('newDevelopments.card.from')} XOF{' '}
            {development.priceXOF.toLocaleString()}
          </p>
          <p className='text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal'>
            ({t('newDevelopments.card.approx')} $
            {development.priceUSD.toLocaleString()} USD)
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-2 mt-2'>
          <Link
            href={`/${locale}/properties/residential/${development.id}`}
            className='flex flex-1 min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent text-navy sm:text-sm text-xs font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity'
            aria-label={`View details of ${development.title}`}
          >
            <span className='truncate'>
              {t('newDevelopments.card.viewDetails')}
            </span>
          </Link>
          <button
            onClick={handleInquire}
            className='flex flex-1 min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-navy text-white sm:text-sm text-xs font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity'
            aria-label={`Inquire about ${development.title}`}
          >
            <span className='truncate'>
              {t('newDevelopments.card.inquireNow')}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
