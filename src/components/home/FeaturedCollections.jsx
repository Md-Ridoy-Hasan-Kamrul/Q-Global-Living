'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getTranslation } from '@/i18n';

export default function FeaturedCollections({ locale, collections }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <section className='py-6 lg:py-10 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl mb-6'>
        {/* Header */}
        <div className='text-center mb-6 lg:mb-10'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight'>
            {t('featuredCollections.title')}
          </h2>
          <p className='mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-charcoal/80 dark:text-soft-grey/80'>
            {t('featuredCollections.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6'>
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/${locale}${collection.href}`}
              className='group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative aspect-5/4 sm:aspect-4/5 w-full overflow-hidden'>
                <Image
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  src={collection.imageUrl}
                  alt={collection.alt ?? collection.title ?? 'Collection image'}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  priority={collection.id <= 2}
                />
              </div>

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent' />

              {/* Content */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6'>
                <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
                  {collection.title}
                </h3>
                <span className='inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/90 transition-colors'>
                  {t('featuredCollections.viewListings')}
                  <svg
                    className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
