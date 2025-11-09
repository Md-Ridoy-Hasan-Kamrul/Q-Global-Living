'use client';

import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import RentHero from '@/components/rent/RentHero';
import RentalFilters from '@/components/rent/RentalFilters';
import RentalPropertyCard from '@/components/rent/RentalPropertyCard';
import { PartnerCTA, FinalCTA } from '@/components/rent/RentCTA';
import { RENT_PROPERTIES } from '@/lib/rentProperties';

/**
 * RentPage Component
 * Main rental properties listing page with filters and search
 * Implements client-side filtering and sorting for optimal performance
 * SEO-optimized with proper semantic HTML and ARIA labels
 */

// Data now imported from shared module RENT_PROPERTIES

export default function RentPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [filters, setFilters] = useState({
    city: 'abidjan',
    bedrooms: 'any',
    duration: 'any',
    priceRange: 50,
    verifiedOnly: true,
  });
  const [sortBy, setSortBy] = useState('newest');
  const [displayCount, setDisplayCount] = useState(3);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Inject structured data for SEO
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        locale === 'en'
          ? "Rent Property in Côte d'Ivoire"
          : "Louer une Propriété en Côte d'Ivoire",
      description:
        locale === 'en'
          ? "Find verified rental properties in Côte d'Ivoire"
          : "Trouvez des propriétés de location vérifiées en Côte d'Ivoire",
      url: `https://qhomes.ci/${locale}/rent`,
      inLanguage: locale === 'en' ? 'en-US' : 'fr-FR',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'rent-page-structured-data';

    // Remove existing script if present
    const existing = document.getElementById('rent-page-structured-data');
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(
        'rent-page-structured-data'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [locale]);

  // Filter and sort properties based on current filters
  const filteredAndSortedProperties = useMemo(() => {
  let filtered = [...RENT_PROPERTIES];

    // Apply city filter
    if (filters.city !== 'all') {
      filtered = filtered.filter((property) => property.city === filters.city);
    }

    // Apply bedrooms filter
    if (filters.bedrooms !== 'any') {
      if (filters.bedrooms === '3+') {
        filtered = filtered.filter((property) => property.bedrooms >= 3);
      } else {
        filtered = filtered.filter(
          (property) => property.bedrooms === parseInt(filters.bedrooms)
        );
      }
    }

    // Apply duration filter
    if (filters.duration !== 'any') {
      filtered = filtered.filter(
        (property) => property.duration === filters.duration
      );
    }

    // Apply verified filter
    if (filters.verifiedOnly) {
      filtered = filtered.filter((property) => property.isVerified);
    }

    // Apply sorting
    switch (sortBy) {
      case 'priceLow':
        filtered.sort((a, b) => a.priceXOF - b.priceXOF);
        break;
      case 'priceHigh':
        filtered.sort((a, b) => b.priceXOF - a.priceXOF);
        break;
      case 'bedrooms':
        filtered.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'furnished':
        filtered = filtered.filter((property) => property.isFurnished);
        break;
      case 'unfurnished':
        filtered = filtered.filter((property) => !property.isFurnished);
        break;
      default:
        // 'newest' - keep original order
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setDisplayCount(3); // Reset display count when filters change
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Load more properties - show all remaining
  const handleLoadMore = () => {
    setDisplayCount(filteredAndSortedProperties.length);
  };

  // Get properties to display
  const displayedProperties = filteredAndSortedProperties.slice(
    0,
    displayCount
  );
  const hasMore = displayCount < filteredAndSortedProperties.length;

  return (
    <main className='w-full'>
      <div className='mx-auto max-w-7xl'>
        {/* Hero Section */}
        <section className='w-full px-4 sm:px-6 lg:px-8 py-8'>
          <RentHero />
        </section>

        {/* Filters Section */}
        <section
          className='w-full px-4 sm:px-6 lg:px-8 pb-10'
          aria-label='Property filters'
        >
          <RentalFilters
            onFilterChange={handleFilterChange}
            initialFilters={filters}
          />
        </section>

        {/* Listings Section */}
        <section
          className='w-full px-4 sm:px-6 lg:px-8 pb-10'
          aria-label='Rental property listings'
        >
          {/* Header with Sort */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              {t('rent.listings.title')}
            </h2>
            <div className='flex items-center gap-3'>
              <label
                htmlFor='sort-by'
                className='text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap'
              >
                {t('rent.listings.sortBy')}
              </label>
              <div className='relative'>
                <select
                  id='sort-by'
                  value={sortBy}
                  onChange={handleSortChange}
                  onFocus={() => setSortDropdownOpen(true)}
                  onBlur={() => setSortDropdownOpen(false)}
                  className='appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-[#fafafa] dark:bg-card-dark shadow-sm focus:border-primary focus:ring-2 focus:ring-primary text-sm pl-4 pr-10 py-2 cursor-pointer min-w-[180px]'
                  aria-label='Sort properties'
                >
                  <option value='newest'>
                    {t('rent.listings.sortOptions.newest')}
                  </option>
                  <option value='priceLow'>
                    {t('rent.listings.sortOptions.priceLow')}
                  </option>
                  <option value='priceHigh'>
                    {t('rent.listings.sortOptions.priceHigh')}
                  </option>
                  <option value='bedrooms'>
                    {t('rent.listings.sortOptions.bedrooms')}
                  </option>
                  <option value='furnished'>
                    {t('rent.listings.sortOptions.furnished')}
                  </option>
                  <option value='unfurnished'>
                    {t('rent.listings.sortOptions.unfurnished')}
                  </option>
                </select>
                <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg
                    className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                      sortDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          {displayedProperties.length > 0 ? (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {displayedProperties.map((property) => (
                  <RentalPropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className='mt-10 text-center'>
                  <button
                    onClick={handleLoadMore}
                    className='bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold text-base py-3 px-10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 shadow-md'
                    aria-label='Load more properties'
                  >
                    {t('rent.listings.loadMore')}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className='text-center py-16'>
              <svg
                className='mx-auto h-16 w-16 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                />
              </svg>
              <h3 className='mt-4 text-lg font-medium text-gray-900 dark:text-white'>
                {t('rent.listings.noResults')}
              </h3>
            </div>
          )}
        </section>

        {/* Partner CTA Section */}
        <section className='w-full px-4 sm:px-6 lg:px-8 pb-10'>
          <PartnerCTA />
        </section>

        {/* Final CTA Section */}
        <section className='w-full px-4 sm:px-6 lg:px-8 pb-10'>
          <FinalCTA />
        </section>
      </div>
    </main>
  );
}
