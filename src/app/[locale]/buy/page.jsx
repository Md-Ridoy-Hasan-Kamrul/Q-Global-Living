'use client';

import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import BuyHero from '@/components/buy/BuyHero';
import BuyFilters from '@/components/buy/BuyFilters';
import BuyPropertyCard from '@/components/buy/BuyPropertyCard';
import { BUY_PROPERTIES } from '@/lib/buyProperties';

export default function BuyPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  // Filter state
  const [filters, setFilters] = useState({
    city: 'abidjan',
    bedrooms: 'any',
    propertyType: 'any',
    verifiedOnly: true,
  });

  // Sort and display state
  const [sortBy, setSortBy] = useState('newest');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);

  // Inject structured data for SEO (match rent page behavior)
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        locale === 'en'
          ? "Buy Property in Côte d'Ivoire"
          : "Acheter une Propriété en Côte d'Ivoire",
      description:
        locale === 'en'
          ? "Discover verified, high-quality properties for sale in Côte d'Ivoire"
          : "Découvrez des propriétés vérifiées et de haute qualité à vendre en Côte d'Ivoire",
      url: `https://qhomes.ci/${locale}/buy`,
      inLanguage: locale === 'en' ? 'en-US' : 'fr-FR',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'buy-page-structured-data';

    const existing = document.getElementById('buy-page-structured-data');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('buy-page-structured-data');
      if (toRemove) toRemove.remove();
    };
  }, [locale]);

  // Apply filters
  const filteredProperties = useMemo(() => {
    return BUY_PROPERTIES.filter((property) => {
      // City filter
      if (filters.city && property.city.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'any') {
        if (filters.bedrooms === '5+') {
          if (property.bedrooms < 5) return false;
        } else {
          if (property.bedrooms !== parseInt(filters.bedrooms)) return false;
        }
      }

      // Property type filter
      if (filters.propertyType !== 'any' && property.propertyType !== filters.propertyType) {
        return false;
      }

      // Verified only filter
      if (filters.verifiedOnly && !property.isVerified) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Apply sorting
  const sortedProperties = useMemo(() => {
    const sorted = [...filteredProperties];

    switch (sortBy) {
      case 'priceLow':
        return sorted.sort((a, b) => a.priceXOF - b.priceXOF);
      case 'priceHigh':
        return sorted.sort((a, b) => b.priceXOF - a.priceXOF);
      case 'bedrooms':
        return sorted.sort((a, b) => b.bedrooms - a.bedrooms);
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  }, [filteredProperties, sortBy]);

  // Properties to display
  const displayedProperties = sortedProperties.slice(0, displayCount);
  const hasMore = displayCount < sortedProperties.length;

  const handleLoadMore = () => {
    // Match rent behavior: show all remaining
    setDisplayCount(sortedProperties.length);
  };

  // Handle filter changes like rent: also reset display count
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setDisplayCount(3);
  };

  return (
    <main className='w-full'>
      <div className='mx-auto max-w-7xl'>
        {/* Hero Section */}
        <section className='w-full px-4 sm:px-6 lg:px-8 py-8'>
          <BuyHero />
        </section>

        {/* Filters Section */}
        <section
          className='w-full px-4 sm:px-6 lg:px-8 pb-10'
          aria-label='Property filters'
        >
          <BuyFilters onFilterChange={handleFilterChange} initialFilters={filters} />
        </section>

        {/* Listings Section */}
        <section
          className='w-full px-4 sm:px-6 lg:px-8 pb-10'
          aria-label='Buy property listings'
        >
          {/* Results Header */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>
              {t('buy.results.title', 'Available Properties')}
            </h2>
            <div className='flex items-center gap-3'>
              <label
                htmlFor='sort-by'
                className='text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap'
              >
                {t('buy.results.sortBy', 'Sort by:')}
              </label>
              <div className='relative'>
                <select
                  id='sort-by'
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  onFocus={() => setSortDropdownOpen(true)}
                  onBlur={() => setSortDropdownOpen(false)}
                  className='appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-[#fafafa] dark:bg-card-dark shadow-sm focus:border-primary focus:ring-2 focus:ring-primary text-sm pl-4 pr-10 py-0.5 sm:py-2 cursor-pointer w-[110px] sm:min-w-[180px]'
                  aria-label='Sort properties'
                >
                  <option value='newest'>
                    {t('buy.results.sortOptions.newest', 'Newest Listings')}
                  </option>
                  <option value='priceLow'>
                    {t('buy.results.sortOptions.priceLow', 'Price (Low to High)')}
                  </option>
                  <option value='priceHigh'>
                    {t('buy.results.sortOptions.priceHigh', 'Price (High to Low)')}
                  </option>
                  <option value='bedrooms'>
                    {t('buy.results.sortOptions.bedrooms', 'Most Bedrooms')}
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

          {/* Properties Grid */}
          {displayedProperties.length > 0 ? (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-6'>
                {displayedProperties.map((property) => (
                  <BuyPropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className='mt-8 sm:mt-12 flex justify-center'>
                  <button
                    onClick={handleLoadMore}
                    className='inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  >
                    {t('buy.results.loadMore', 'Load More Properties')}
                  </button>
                </div>
              )}
            </>
          ) : (
            // No results
            <div className='text-center py-16'>
              <svg
                className='mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                {t('buy.results.noResults', 'No Properties Found')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('buy.results.noResultsMessage', 'Try adjusting your filters to see more properties')}
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className='w-full px-4 sm:px-6 lg:px-8 pb-16'>
          <div className='p-6 sm:p-8 rounded-2xl bg-[#fafafa] dark:from-primary/20 dark:to-secondary/20 border border-primary/20 dark:border-primary/30'>
            <div className='text-center max-w-3xl mx-auto'>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4'>
                {t('buy.cta.title', "Can't find what you're looking for?")}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed'>
                {t(
                  'buy.cta.description',
                  'Our team can help you find the perfect property. Contact us for personalized assistance.'
                )}
              </p>
              <a
                href={`/${locale}/contact`}
                className='inline-flex items-center justify-center min-w-[140px] px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              >
                {t('buy.cta.button', 'Contact Us')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
