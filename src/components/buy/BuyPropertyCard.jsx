'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import Image from 'next/image';
import Link from 'next/link';

/**
 * BuyPropertyCard Component
 * Displays a single property for sale with all relevant information
 * Follows atomic design principles and SOLID/DRY best practices
 *
 * @param {Object} property - Property data object
 */
export default function BuyPropertyCard({ property }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const {
    id,
    image,
    imageAlt,
    location,
    title,
    priceXOF,
    priceUSD,
    isVerified = false,
    propertyType = 'house',
    bedrooms,
    bathrooms,
    area,
  } = property;

  // Format price with thousand separators
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  // WhatsApp message handler
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${title} at ${location}. Can you provide more details?`
    );
    window.open(
      `https://wa.me/1234567890?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <article
      className='flex flex-col gap-3 rounded-xl bg-white/50 dark:bg-card-dark shadow-md border border-[#f6efcb] dark:border-border-dark overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
      aria-label={`${title} property for sale`}
    >
      {/* Property Image */}
      <div className='relative w-full aspect-5/3 bg-gray-200 dark:bg-gray-700 overflow-hidden'>
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover group-hover:scale-105 transition-transform duration-500'
          loading='lazy'
        />

        {/* Badges - Top Left */}
        <div className='absolute top-3 left-3 flex items-center gap-2 flex-wrap'>
          {isVerified && (
            <span
              className='flex items-center gap-1 bg-[#D4AF37] text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-md'
              aria-label='Verified property'
            >
              <svg
                className='w-3.5 h-3.5'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{t('buy.propertyCard.verified', 'Verified')}</span>
            </span>
          )}
        </div>

        {/* Property Type Badge - Top Right */}
        <div className='absolute top-3 right-3'>
          <span
            className='flex items-center gap-1 bg-gray-700/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-md capitalize'
            aria-label={`${propertyType} property`}
          >
            <svg
              className='w-3.5 h-3.5'
              fill='currentColor'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </svg>
            <span>{t(`buy.propertyTypes.${propertyType}`, propertyType)}</span>
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className='p-4 flex flex-col grow'>
        {/* Location */}
        <p className='text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal line-clamp-1'>
          {location}
        </p>

        {/* Title */}
        <h3 className='text-xl lg:text-2xl font-bold leading-snug mt-1 line-clamp-1 text-gray-900 dark:text-white'>
          {title}
        </h3>

        {/* Property Features */}
        {(bedrooms || bathrooms || area) && (
          <div className='flex items-center gap-2 sm:gap-3 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300'>
            {bedrooms && (
              <div className='flex items-center gap-1'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
                <span>
                  {bedrooms} {bedrooms > 1 ? 'beds' : 'bed'}
                </span>
              </div>
            )}
            {bathrooms && (
              <div className='flex items-center gap-1'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  {bathrooms} {bathrooms > 1 ? 'baths' : 'bath'}
                </span>
              </div>
            )}
            {area && (
              <div className='flex items-center gap-1'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                </svg>
                <span>{area} m²</span>
              </div>
            )}
          </div>
        )}

        {/* Price */}
        <div className='mt-2 sm:mt-3'>
          <p className='text-[#D4AF37] text-xl  font-bold'>
            {formatPrice(priceXOF)} XOF
          </p>
          <p className='text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal'>
            {t('buy.propertyCard.approx', '~')} ${formatPrice(priceUSD)}{' '}
            {t('buy.propertyCard.usd', 'USD')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-border-dark grid grid-cols-3 gap-1.5 sm:gap-2'>
          <Link
            href={`/${locale}/buy/${id}`}
            className='text-xs sm:text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap'
            aria-label={`View details for ${title}`}
          >
            {t('buy.propertyCard.viewDetails', 'View Details')}
          </Link>
          <Link
            href={`/${locale}/book-visit?property=${id}`}
            className='text-xs sm:text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap'
            aria-label={`Book viewing for ${title}`}
          >
            {t('buy.propertyCard.bookViewing', 'Book Viewing')}
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className='text-xs sm:text-sm lg:text-base font-semibold p-2 rounded-lg text-[#25D366] hover:bg-[#25D366]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 truncate'
            aria-label={`Contact via WhatsApp about ${title}`}
          >
            {t('buy.propertyCard.whatsapp', 'WhatsApp')}
          </button>
        </div>
      </div>
    </article>
  );
}
