'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/i18n';
import ImageGallery from '@/components/property/ImageGallery';
import PropertyHeader from '@/components/property/PropertyHeader';
import PropertyFeatures from '@/components/property/PropertyFeatures';
import ContactActions from '@/components/property/ContactActions';
import PropertyTabs from '@/components/property/PropertyTabs';
import RentalOverview from '@/components/property/RentalOverview';
import { getBuyPropertyById } from '@/lib/buyProperties';

export default function BuyDetailsPage() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const id = params?.id;
  const { t } = useTranslation(locale);

  // Get the selected property from shared dataset
  const base = getBuyPropertyById(id);

  // If not found, render a simple fallback
  if (!base) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-700">
          <h1 className="text-2xl font-semibold mb-2">{t('buy.noResults')}</h1>
          <Link href={`/${locale}/buy`} className="text-primary underline">{t('common.back')}</Link>
        </div>
      </main>
    );
  }

  const mockProperty = {
    id: base.id,
    title: base.title,
    location: base.location,
    price: base.priceXOF,
    priceUSD: base.priceUSD,
    developer: 'KOF Builders',
    status: base.isVerified ? t('buy.property.status') : undefined,
    images: [
      base.image,
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    ],
    features: {
      bedrooms: base.bedrooms,
      bathrooms: base.bathrooms,
      area: base.area,
      garages: 2,
    },
    description: t('buy.property.description'),
    highlights: [
      t('buy.property.highlights.pool'),
      t('buy.property.highlights.living'),
      t('buy.property.highlights.kitchen'),
      t('buy.property.highlights.master'),
      t('buy.property.highlights.security'),
      t('buy.property.highlights.proximity'),
    ],
    interiorFeatures: [
      t('buy.property.interior.kitchen'),
      t('buy.property.interior.ac'),
      t('buy.property.interior.wardrobes'),
      t('buy.property.interior.flooring'),
      t('buy.property.interior.internet'),
      t('buy.property.interior.generator'),
    ],
    exteriorFeatures: [
      t('buy.property.exterior.pool'),
      t('buy.property.exterior.garden'),
      t('buy.property.exterior.gated'),
      t('buy.property.exterior.parking'),
      t('buy.property.exterior.entertainment'),
      t('buy.property.exterior.cctv'),
    ],
    locationDescription: t('buy.property.locationDesc'),
    developerDescription: t('buy.property.developerDesc'),
    rental: {
      duration: t('buy.property.rental.duration'),
      furnishing: t('buy.property.rental.furnishing'),
      deposit: t('buy.property.rental.deposit'),
    },
  };

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Container with max-width for better readability */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content Area - Left Side (2/3 width on large screens) */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Image Gallery */}
            <Suspense
              fallback={
                <div className='w-full h-96 bg-gray-200 rounded-lg animate-pulse' />
              }
            >
              <ImageGallery
                images={mockProperty.images}
                alt={mockProperty.title}
              />
            </Suspense>

            {/* Tabbed Content */}
            <section className='bg-white rounded-lg shadow-sm p-6'>
              <PropertyTabs property={mockProperty} />
            </section>
          </div>

          {/* Sidebar - Right Side (1/3 width on large screens) */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Property Info Card - Sticky on larger screens */}
            <div className='sticky top-8 space-y-6'>
              {/* Combined Property Header and Contact Actions Card */}
              <div className='bg-white rounded-lg shadow-sm p-6'>
                <PropertyHeader
                  title={mockProperty.title}
                  location={mockProperty.location}
                  price={mockProperty.price}
                  priceUSD={mockProperty.priceUSD}
                  developer={mockProperty.developer}
                  status={mockProperty.status}
                />

                {/* Divider */}
                <div className='my-6 border-t border-gray-200'></div>

                <ContactActions
                  propertyId={mockProperty.id}
                  propertyTitle={mockProperty.title}
                />
              </div>

              {/* Rental Overview */}
              {mockProperty.rental && (
                <RentalOverview rental={mockProperty.rental} />
              )}
            </div>
          </div>
        </div>

        {/* Breadcrumbs for SEO and navigation */}
        <nav className='mt-8 mb-4' aria-label='Breadcrumb'>
          <ol className='flex items-center space-x-2 text-sm text-gray-500'>
            <li>
              <Link href={`/${locale}`} className='hover:text-gray-700'>
                {t('common.home')}
              </Link>
            </li>
            <li>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </li>
            <li>
              <Link href={`/${locale}/buy`} className='hover:text-gray-700'>
                {t('common.buy')}
              </Link>
            </li>
            <li>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </li>
            <li className='text-gray-900 font-medium truncate max-w-xs'>
              {mockProperty.title}
            </li>
          </ol>
        </nav>
      </div>
    </main>
  );
}
