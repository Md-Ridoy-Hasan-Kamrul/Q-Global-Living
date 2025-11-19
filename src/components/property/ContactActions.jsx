'use client';

import { useState, memo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * ContactActions Component - Optimized
 * Action buttons for property inquiries
 * Features: WhatsApp integration, booking modal trigger, escrow contact, i18n support
 * Performance: Memoized to prevent unnecessary re-renders
 */
function ContactActions({ propertyId, propertyTitle }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Format phone number for WhatsApp (example: Ivory Coast format)
  const whatsappNumber = '2250700000000'; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    `${t(
      'buy.property.whatsappMessage'
    )} "${propertyTitle}" (ID: ${propertyId}). ${t(
      'buy.property.whatsappDetails'
    )}`
  );

  const handleBookViewing = useCallback(() => {
    setIsBookingModalOpen(true);
    // In production, open a modal or navigate to booking page
    console.log('Open booking modal for property:', propertyId);
  }, [propertyId]);

  const handleWhatsAppChat = useCallback(() => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      '_blank'
    );
  }, [whatsappNumber, whatsappMessage]);

  const handleEscrowReserve = useCallback(() => {
    // In production, navigate to escrow reservation flow
    console.log('Navigate to escrow reservation for property:', propertyId);
  }, [propertyId]);

  return (
    <div className='space-y-3'>
      {/* Book a Viewing Button */}
      <button
        onClick={handleBookViewing}
        className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-sm xl:text-base py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm'
        aria-label={t('buy.property.bookViewing')}
      >
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
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
        <span>{t('buy.property.bookViewing')}</span>
      </button>

      {/* Chat on WhatsApp Button */}
      <button
        onClick={handleWhatsAppChat}
        className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm xl:text-base py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm'
        aria-label={t('buy.property.chatWhatsApp')}
      >
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
        <span>{t('buy.property.chatWhatsApp')}</span>
      </button>

      {/* Reserve with Escrow Button */}
      <button
        onClick={handleEscrowReserve}
        className='w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 text-sm xl:text-base rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm'
        aria-label={t('buy.property.reserveEscrow')}
      >
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
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
        <span>{t('buy.property.reserveEscrow')}</span>
      </button>
    </div>
  );
}

export default memo(ContactActions);
