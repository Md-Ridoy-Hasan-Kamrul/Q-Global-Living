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

// Mock rental properties data (in production, fetch from API)
const MOCK_PROPERTIES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    imageAlt: 'Modern apartment exterior with balcony',
    location: 'Abidjan, Cocody',
    title: 'Modern Apartment in Cocody',
    priceXOF: 1500000,
    priceUSD: 2500,
    isVerified: true,
    duration: 'short-term',
    isFurnished: true,
    bedrooms: 2,
    bathrooms: 2,
    city: 'abidjan',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    imageAlt: 'Luxury seaside villa with swimming pool',
    location: 'Assinie-Mafia',
    title: 'Seaside Villa in Assinie',
    priceXOF: 3000000,
    priceUSD: 5000,
    isVerified: true,
    duration: 'long-term',
    isFurnished: true,
    bedrooms: 4,
    bathrooms: 3,
    city: 'assinie',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    imageAlt: 'Chic loft apartment with high ceilings',
    location: 'Abidjan, Plateau',
    title: 'Chic Loft in Plateau',
    priceXOF: 2000000,
    priceUSD: 3300,
    isVerified: false,
    duration: 'long-term',
    isFurnished: false,
    bedrooms: 3,
    bathrooms: 2,
    city: 'abidjan',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    imageAlt: 'Elegant apartment with modern finishes',
    location: 'Yamoussoukro',
    title: 'Elegant Residence in Yamoussoukro',
    priceXOF: 1200000,
    priceUSD: 2000,
    isVerified: true,
    duration: 'short-term',
    isFurnished: true,
    bedrooms: 3,
    bathrooms: 2,
    city: 'yamoussoukro',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    imageAlt: 'Spacious family home with garden',
    location: 'Abidjan, Marcory',
    title: 'Family Home in Marcory',
    priceXOF: 1800000,
    priceUSD: 3000,
    isVerified: true,
    duration: 'long-term',
    isFurnished: false,
    bedrooms: 4,
    bathrooms: 3,
    city: 'abidjan',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    imageAlt: 'Contemporary studio apartment',
    location: 'Abidjan, Zone 4',
    title: 'Contemporary Studio in Zone 4',
    priceXOF: 800000,
    priceUSD: 1300,
    isVerified: false,
    duration: 'short-term',
    isFurnished: true,
    bedrooms: 1,
    bathrooms: 1,
    city: 'abidjan',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    imageAlt: 'Luxury penthouse with city views',
    location: 'Abidjan, Cocody',
    title: 'Luxury Penthouse in Cocody',
    priceXOF: 4500000,
    priceUSD: 7500,
    isVerified: true,
    duration: 'long-term',
    isFurnished: true,
    bedrooms: 5,
    bathrooms: 4,
    city: 'abidjan',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    imageAlt: 'Cozy apartment near beach',
    location: 'Assinie-Mafia',
    title: 'Beachfront Apartment in Assinie',
    priceXOF: 2500000,
    priceUSD: 4200,
    isVerified: true,
    duration: 'short-term',
    isFurnished: true,
    bedrooms: 3,
    bathrooms: 2,
    city: 'assinie',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    imageAlt: 'Modern villa with garden',
    location: 'Yamoussoukro',
    title: 'Garden Villa in Yamoussoukro',
    priceXOF: 1600000,
    priceUSD: 2700,
    isVerified: true,
    duration: 'long-term',
    isFurnished: false,
    bedrooms: 4,
    bathrooms: 3,
    city: 'yamoussoukro',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    imageAlt: 'Spacious townhouse',
    location: 'Abidjan, Marcory',
    title: 'Modern Townhouse in Marcory',
    priceXOF: 2200000,
    priceUSD: 3700,
    isVerified: true,
    duration: 'long-term',
    isFurnished: true,
    bedrooms: 4,
    bathrooms: 3,
    city: 'abidjan',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    imageAlt: 'Charming bungalow',
    location: 'Abidjan, Riviera',
    title: 'Charming Bungalow in Riviera',
    priceXOF: 1400000,
    priceUSD: 2300,
    isVerified: false,
    duration: 'short-term',
    isFurnished: true,
    bedrooms: 2,
    bathrooms: 2,
    city: 'abidjan',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    imageAlt: 'Executive apartment',
    location: 'Abidjan, Plateau',
    title: 'Executive Suite in Plateau',
    priceXOF: 3500000,
    priceUSD: 5800,
    isVerified: true,
    duration: 'long-term',
    isFurnished: true,
    bedrooms: 3,
    bathrooms: 3,
    city: 'abidjan',
  },
];

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
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>
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
                  className='appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-[#fafafa] dark:bg-card-dark shadow-sm focus:border-primary focus:ring-2 focus:ring-primary text-sm pl-4 pr-10 py-0.5 sm:py-2 cursor-pointer w-[110px] sm:min-w-[150px] md:min-w-[180px]'
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
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-6'>
                {displayedProperties.map((property) => (
                  <RentalPropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className='mt-8 sm:mt-10 text-center'>
                  <button
                    onClick={handleLoadMore}
                    className='inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 shadow-md'
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
